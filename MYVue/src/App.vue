<!-- 
理解父组件和子组件：
我们将某段代码封装成一个组件，而这个组件又在另一个组件中引入，
而引入该封装的组件的文件叫做父组件，被引入的组件叫做子组件。 
-->

<script setup>
import helloComponents from './components/HelloWorld.vue'
import { ref, onBeforeMount, onMounted } from 'vue'
const text = ref('good')

const logMsg = (val) => {
  console.log("父组件接收:" + val);

}
</script>

<template>
  <div>
    父子传参--->控制台
    <helloComponents :msg="text" @send-example="logMsg"> </helloComponents>
  </div>
</template>

<style scoped></style>
