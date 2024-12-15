<script>
import { ref } from 'vue'

export default {
  setup() {
    console.log("这是SetUp函数,在before之前");
    const count = ref(1)
    const addCount = () => {
      count.value++
    }
    // 需要返回不然出错
    return {
      count,
      addCount
    }
  },
  beforeCreate() {
    console.log('这是BeforeCreate函数');
  }
}

</script>

<template>
  <div class="box">
    <button class="my-button" @click="addCount">
      result{{ count }}
    </button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
