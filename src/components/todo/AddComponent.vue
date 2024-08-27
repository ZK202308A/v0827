
<template>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" v-model="todo.title" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Writer</label>
    <input type="text" class="form-control" v-model="todo.writer" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Due Date</label>
    <input type="date" class="form-control" v-model="todo.dueDate" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <button type="button" class="btn btn-primary" @click="handleClick" >Submit</button>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { addOne } from '../../api/todoAPI';
import { useRouter } from 'vue-router';

const router = useRouter()

const todo = ref({
  title:'',
  writer:'',
  dueDate:''
})

const handleClick = () => {

  addOne(todo.value).then( result => {
    console.log(result)

    alert(result.mno)

    router.push('/todo/list')

  })

}



</script>

<style lang="scss" scoped>

</style>