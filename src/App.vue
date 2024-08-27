<script setup>
import { RouterView , RouterLink} from 'vue-router';
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Tutorial Republic</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <RouterLink to="/" class="nav-item nav-link active">Home</RouterLink>
                <RouterLink to="/about" class="nav-item nav-link ">About</RouterLink>
                <RouterLink to="/todo" class="nav-item nav-link ">Todo</RouterLink>
                <a href="#" class="nav-item nav-link">Contact</a>
            </div>
            <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">Register</a>
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav>

  <RouterView></RouterView>
  
</template>

<style scoped>
</style>
