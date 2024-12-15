<script setup>
// 宏函数 无需导入就可以使用
// 还有一种不校验类型的传递方法defineProps(['msg'])
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['sendExample'])

const sendMsg = () => {
  // 必须与上面一致
  emit('sendExample', "我是子组件的值")
}
</script>

<template>

  <div class="greetings">
    <button @click="sendMsg">点我子传给父</button>

    <h1 class="green">测试父传子{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
