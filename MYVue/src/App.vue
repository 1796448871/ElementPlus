<script setup>
import { ref, onMounted, provide } from 'vue'
import Fa_Zu from './components/Fa_Zu.vue';

const toSon=ref("i'm your father's father")
// 允许写多个provide
provide('item' , toSon)
// 将toSon对象传递给子孙后代,key是item
</script>

<template>
<div class="box">
  <h2>
    祖先组件
  </h2>
  <Fa_Zu></Fa_Zu>
</div>
</template>

<style scoped>
.box{
border: 10px   solid  olive;
}
</style>
