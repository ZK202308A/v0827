
<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">MNO</label>
    <input type="text" class="form-control" v-model="todo.mno" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" v-model="todo.title" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Writer</label>
    <input type="text" class="form-control" v-model="todo.writer" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Due Date</label>
    <input type="date" class="form-control" v-model="todo.dueDate" readonly>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <button type="button" class="btn btn-primary" @click="handleClick" >Edit</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getOne } from '../../api/todoAPI';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const handleClick = () => {
  router.push(`/todo/edit/${todo.value.mno}`)
}

const todo = ref({
  mno:0,
  title: '',
  writer: '',
  dueDate: ''
})

onMounted(() => {

  getOne(route.params.mno).then(res => todo.value = res)

})
</script>

<style lang="scss" scoped>

</style>