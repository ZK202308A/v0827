
<template>
  <div>
    <h1>Login Page</h1>
    <input type="text" v-model="memberInput.mid">
    <input type="text" v-model="memberInput.mname">
    <button @click = "handleClickLogin">LOGIN</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useMember from '../../store/useMember';
import { useRouter } from 'vue-router';

const memberInput = ref({mid:'', mname:''})

const {login} = useMember()

const router = useRouter()

const handleClickLogin = () => {

  login(memberInput.value.mid, memberInput.value.mname)

  router.replace("/todo/list")

}


</script>

<style lang="scss" scoped>

</style>