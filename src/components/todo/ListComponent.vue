

<template>
    <div class="col-md-6 col-lg-6 col-xl-6" v-for="todo in serverData.content" :key="todo.mno">
        <h2>{{todo.mno}}</h2>
        <p>{{todo.title}} Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own website.</p>
        <p><RouterLink :to="`/todo/read/${todo.mno}`" class="btn btn-success">
            Read More &raquo;
          </RouterLink>
        </p>
    </div>
</template>

<script setup>

import { onMounted , ref} from 'vue';
import { getList } from '../../api/todoAPI';
import { RouterLink } from 'vue-router';

const serverData = ref({
  content: []
})


onMounted(async () => {
  
  const result = await getList()

  serverData.value = result

})


</script>

<style lang="scss" scoped>

</style>


