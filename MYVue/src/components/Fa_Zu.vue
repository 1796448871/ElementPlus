<script setup>
import { ref, onMounted } from 'vue'
import Son_Zu from './Son_Zu.vue';

</script>

<template>
<div class="fa">
  <h2>
    父组件
  </h2>
  <Son_Zu></Son_Zu>
</div>
</template>

<style scoped>
.fa{
border: 5px solid rgb(34, 0, 128);
}</style>
