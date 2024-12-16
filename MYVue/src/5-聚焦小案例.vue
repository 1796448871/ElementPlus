<script setup>
import { ref, onMounted } from 'vue'

const autoFocus=ref(null)

onMounted(( )=>{
  if(autoFocus.value){
    autoFocus.value.focus()
    // 聚焦方法,没有单词提醒
  }
})
</script>

<template>
 <input ref="autoFocus" v-model="inputValue " placeholder="请输入……">

</template>

<style scoped></style>
