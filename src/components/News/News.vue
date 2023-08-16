<template>
  <div class="news-list">
    <NewsCard v-for="item in news" :item="item" />
  </div>
  <div class="load">
    <Button v-if="hasNextPage" @click="handleLoadMore()">Загрузить ещё</Button>
  </div>
</template>

<script setup>
import Button from '../UI/Button/Button.vue'
import NewsCard from './NewsCard/NewsCard.vue'
import { useNews } from '../../composables/useNews'

const { news, hasNextPage, handleLoadMore } = useNews()
</script>

<style scoped>
.news-list {
  max-width: 1700px;
  margin: 4rem auto;
  display: grid;
  gap: 1rem;
}
.load {
  text-align: center;
  margin-top: 2rem;
}

@media (min-width: 900px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .news-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
