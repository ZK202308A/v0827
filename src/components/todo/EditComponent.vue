
<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">MNO</label>
    <input type="text" class="form-control" v-model="todo.mno" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" v-model="todo.title" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Writer</label>
    <input type="text" class="form-control" v-model="todo.writer" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Due Date</label>
    <input type="date" class="form-control" v-model="todo.dueDate" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <button type="button" class="btn btn-primary" @click="handleClickEdit" >Edit</button>
    <button type="button" class="btn btn-danger" @click="handleClickDelete">Delete</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getOne, deleteOne, putOne } from '../../api/todoAPI';
import { useRoute, useRouter } from 'vue-router';
import useMember from '../../store/useMember';

const route = useRoute()
const router = useRouter()

const {mid} = useMember()

const handleClickDelete = () => {
  
  deleteOne(todo.value.mno).then(() => {
    router.replace("/todo/list")
  })
}

const handleClickEdit = () => {

  putOne(todo.value).then(() => {
    router.replace(`/todo/read/${todo.value.mno}`)
  })

}

const todo = ref({
  mno:0,
  title: '',
  writer: '',
  dueDate: ''
})

onMounted(() => {

  getOne(route.params.mno).then(
    res => {

      console.log("res.writer: " + res.writer)
      console.log(mid.value)

      if(res.writer != mid.value) {
        console.log("다른 사람이 작성한 글")
        alert("다른 사람의 글이므로 수정/삭제 불가")
        router.replace("/todo/list")
      }

      todo.value = res
    })

})
</script>

<style lang="scss" scoped>

</style>