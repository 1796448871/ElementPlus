<template>  
  <div class="auth-container">  
    <el-form :model="form" class="auth-form" @submit.prevent="login">  
      <el-form-item label="用户名" label-width="80px">  
        <el-input v-model="form.username" placeholder="请输入用户名" />  
      </el-form-item>  
      <el-form-item label="密码" label-width="80px">  
        <el-input v-model="form.password" type="password" placeholder="请输入密码" />  
      </el-form-item>  
      <el-form-item>  
        <el-button type="primary" native-type="submit">登录</el-button>  
      </el-form-item>  
    </el-form>  
  </div>  
</template>  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  // import { useAuthStore } from '../store/auth';
  import { ElMessage } from 'element-plus';
import axios from '../axios';
  
  const form = ref({
    username: '',
    password: '',
  });
  
  // const authStore = useAuthStore();
  const router = useRouter();
  const token =ref<string|null>(localStorage.getItem('token'))
  // 添加async异步还有一层原因和promise有关
  const login = async () => {
    try {
    const username=  form.value.username
    const password=  form.value.password
      const res = await axios.post('/auth/login', {username,password})
      token.value=res.data.token
      // 还是要存储到localStorage中的
      localStorage.setItem('token',token.value||'')

      router.push({ name: 'News' });
    } catch {
      ElMessage.error('登录失败，请检查用户名和密码。');
    }
  };
  </script>
  
  <style scoped>
.auth-container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh; 
  background-color: #f5f5f5; 
  padding: 20px;  
  box-sizing: border-box; 
}  
  
.auth-form {  
  width: 100%;  
  max-width: 360px; 
  padding: 20px;  
  background-color: #fff;  
  border-radius: 4px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
}  
  </style>
  