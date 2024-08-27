import { defineStore } from "pinia";
import { computed, ref, toRef } from "vue";

const loadMember = () => {
  const str = localStorage.getItem("member")

  if(str) {
    return JSON.parse(str)
  }
  return {mid:'', mname:''}
}

const useMember = defineStore('memberStore', () => {

  const member = ref( loadMember() )

  const refMid = toRef(member.value, "mid")

  const login = (mid, mname) => {

    member.value.mid = mid
    member.value.mname = mname
  
    localStorage.setItem("member", JSON.stringify(member.value))
    
  }

  const mid = computed(() => {
    return refMid
  })

  return {login, mid}
  
})

export default useMember