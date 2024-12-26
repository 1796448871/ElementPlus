import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from '../axios';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'));

  // 双感叹号,能将任何值转换成布尔值,有是true没有是false
  const isAuthenticated = computed(() => !!token.value);

  const login = async (username: string, password: string) => {
    // 不用try catch捕获,让调用(login.vue 32 )的位置捕获,方便其catch相应
    const response = await axios.post('/auth/login', { username, password });
    token.value = response.data.token;
    localStorage.setItem('token', token.value || '');

  };

  const register = async (username: string, password: string) => {
    const response = await axios.post('/auth/register', { username, password });
    token.value = response.data.token;
    localStorage.setItem('token', token.value || '');
  };

  const logout = () => {
    token.value = null;
    localStorage.removeItem('token');
  };

  return {
    token,
    isAuthenticated,
    login,
    register,
    logout
  };
});
