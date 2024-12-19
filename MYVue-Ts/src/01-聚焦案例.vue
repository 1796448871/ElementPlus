<script setup lang="ts">
import {ref,onMounted,nextTick} from "vue"
const inputValue = ref<string> ("")
const autoFocusInput= ref<null| HTMLInputElement>(null)
onMounted(async()=>{
  await nextTick();
  autoFocusInput.value?.focus()
})

</script>

<template>
<input ref="autoFocusInput" v-model="inputValue" placeholder="请输入">
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
