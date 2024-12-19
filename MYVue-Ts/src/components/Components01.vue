<template>
    <div>
<p>Message:{{ message }}</p>
<button @click="logMessage">Log It</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message =ref("Helle from logmsg")
const logMessage=()=>{
    console.log(message.value)
}

// 导出了别人才能用，否则Ts没有提示代表错误
defineExpose({
    message,
    logMessage
})
</script>

<style scoped>

</style>