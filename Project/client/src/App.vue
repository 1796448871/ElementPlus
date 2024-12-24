<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="currencyExchange">兑换货币</el-menu-item>
        <el-menu-item index="news">查看新闻</el-menu-item>
        <el-menu-item index="login">登录</el-menu-item>
        <el-menu-item index="register">注册</el-menu-item>
        <el-menu-item index="logout">退出</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <!-- 显示当前路由内容,相当重要 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref,watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// router 是路由实例，可以用来编程式地导航。
const router = useRouter()
// route 是当前路由信息对象，包含了当前路由的所有信息。
const route = useRoute()
// 初始值为当前路由的名称（route.name），如果路由名称不存在，则默认为 'home'。
const activeIndex = ref(route.name?.toString() || 'home');

watch(route, (newRoute) => {
  activeIndex.value = newRoute.name?.toString() || 'home';
  console.log(activeIndex.value);
})

const handleSelect = (key: string) => {
  if ( key === 'logout') {
    authStore.logout();
    router.push({ name: 'Home' });
  } else {
    router.push({ name:  key.charAt(0).toUpperCase() +  key.slice(1) });
  }
};

</script>


<style scoped>
.el-menu-demo {
  line-height: 60px;
}
</style>