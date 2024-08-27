

<template>
    <div class="col-md-6 col-lg-6 col-xl-6" v-for="todo in serverData.content" :key="todo.mno">
        <h2>{{todo.mno}}</h2>
        <p>{{todo.title}} Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own website.</p>
        <p><RouterLink :to="`/todo/read/${todo.mno}`" class="btn btn-success">
            Read More &raquo;
          </RouterLink>
        </p>
    </div>

    <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
      <ul class="pagination">
        <li :class="`page-item ${ page == serverData.number+1 ?'active':''}`" v-for="{page,label} in pageNums" :key="page">
          <a class="page-link" @click="() => handleClickPage(page)" >{{label}}</a>
        </li>
      </ul>
    </div>

</template>

<script setup>

import { computed, onMounted , ref} from 'vue';
import { getList } from '../../api/todoAPI';
import { onBeforeRouteUpdate, RouterLink, useRoute, useRouter } from 'vue-router';

const serverData = ref({
  content: [],
  number: 0,
  size: 0,
  totalPages:0
})

const router = useRouter()
const route = useRoute()

const handleClickPage = (pageNum) => {

  const currentQueryPage = parseInt(route.query.page || 1)

  console.log('handleClickPage ' + pageNum + " : " + route.query.page)

  if(currentQueryPage == pageNum) {
    console.log("동일 페이지 클릭")

    getList(pageNum).then(res => serverData.value = res)

  }else {
    console.log("다른 페이지 클릭")
    router.push({path:'/todo/list', query: {page:pageNum}})
  }
}

const pageNums = computed(() => {

  const current = serverData.value.number + 1

  let lastPageNum = Math.ceil(current/10.0) * 10

  const startPageNum = lastPageNum - 9 
  const prev = startPageNum !== 1
  let next = true

  if(serverData.value.totalPages <= lastPageNum) {
    lastPageNum = serverData.value.totalPages
    next = false
  }

  //arr
  const arr = []
  if(prev){
    arr.push({page: startPageNum-1, label:"Prev"})
  }
  for(let i = startPageNum; i <= lastPageNum; i++){
    arr.push({page: i, label: i})
  }
  if(next){
    arr.push({page: lastPageNum + 1 , label:"Next"})
  }
  return arr
})



onMounted(async () => {
  
  const page = route.query.page || 1

  const result = await getList(page)

  serverData.value = result

  console.log(serverData.value)

})

onBeforeRouteUpdate(async (to,from,next) => {

  console.log('onBeforeRouteUpdate')

  const result = await getList(to.query.page)

  serverData.value = result

  next()  
})


</script>

<style lang="scss" scoped>

</style>


