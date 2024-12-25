<template>
  <el-container>
    <el-main>
      <div v-if="articles && articles.length">
        <el-card v-for="article in articles" :key="article._id" class="article-card">
          <h2>{{ article.title }}</h2>
          <p>{{ article.preview }}</p>
          <el-button text >阅读更多</el-button>
        </el-card>
      </div>
      <div v-else class="no-data">No data</div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import axios from '../axios';

interface Article {
    _id: string;
    title: string;
    preview: string;
    content: string;
}

const articles = ref<Article[]>([]);
// const router = useRouter();

const fetchArticles = async () => {
  try {
    const response = await axios.get<Article[]>('/articles');
    articles.value = response.data;
  } catch (error) {
    console.error('Failed to load articles:', error);
  }
};

// const viewDetail = (id: string) => {
//   if (!authStore.isAuthenticated) {
//     ElMessage.error('请先登录后再查看');
//     return;
//   }
//   router.push({ name: 'NewsDetail', params: { id } });
// };

onMounted(fetchArticles);
</script>

<style scoped>
.article-card {
  margin: 20px 0;
}

.no-data {
  text-align: center;
  font-size: 1.2em;
  color: #999;
}
</style>
