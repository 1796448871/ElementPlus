<template>
    <div>
        <Components01 ref="components"></Components01>
        <button @click="appLog">App的打印</button>
    </div>
</template>

<script setup lang="ts">
import{ref,reactive} from 'vue'
import Components01 from './components/Components01.vue';

// 注意这种写法
const components=ref<InstanceType<typeof Components01>|null>(null)

const appLog=()=>{
    if(components.value){
        // 有函数的提示，代表components有导出;否则默认是封闭的
        components.value.logMessage()
    }
}
</script>

<style scoped>

</style>