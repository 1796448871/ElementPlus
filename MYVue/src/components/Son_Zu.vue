<script setup>
import { ref, onMounted } from 'vue'

import { inject } from 'vue';

const msg= inject('item')

</script>

<template>
<div class="son" >
  <h2>
    孙组件
  </h2>
  <h3>孙组件接收:  {{ msg }}</h3>
</div>
</template>

<style scoped>
.son{
border: 2px solid rgb(128, 0, 0);
}</style>
