import { createRouter, createWebHistory } from 'vue-router';//使用createWebHistory,不用内存用浏览器存储
import HomeView from '../views/HomeView.vue';
import CurrencyExchangeView from '../views/CurrencyExchangeView.vue';
import NewsView from '../views/NewsView.vue';
import NewsDetailView from '../views/NewsDetailView.vue';
import type { RouteRecordRaw } from 'vue-router'; // 新的写法？


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/exchange', name: 'CurrencyExchange', component: CurrencyExchangeView },
  { path: '/news', name: 'News', component: NewsView },
  { path: '/news/:id', name: 'NewsDetail', component: NewsDetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 不导出的话,router显示未使用
export default router;
