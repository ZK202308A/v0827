<template>
  <div class="container">
    <div class="p-5 my-4 bg-light rounded-3">
      <RouterLink to="/todo/add">Add</RouterLink>  
    </div>

    <RouterView></RouterView>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<style lang="scss" scoped>

</style>