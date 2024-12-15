<!-- setup() : 开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method
onBeforeMount() : 组件挂载到节点上之前执行的函数；
onMounted() : 组件挂载完成后执行的函数；
onBeforeUpdate(): 组件更新之前执行的函数；
onUpdated(): 组件更新完成之后执行的函数；
onBeforeUnmount(): 组件卸载之前执行的函数；
onUnmounted(): 组件卸载完成后执行的函数；
onActivated(): 被包含在 <keep-alive> 中的组件，会多出两个生命周期钩子函数，被激活时执行；
onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行；
onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。
 -->
<script setup>
import { ref, computed, reactive } from 'vue'

const count = reactive({
  count: 0
})
const addCount = () => {
  count.count++
}
// 注意computed的语法
const result = computed(() => {
  return count.count * 2
})


</script>

<template>
  <div class="box">
    <button class="my-button" @click="addCount">result{{ count.count }} </button>
    <p>new Result {{ result }}</p>
  </div>
</template>

<style scoped></style>
