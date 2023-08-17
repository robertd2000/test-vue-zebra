<template>
  <div class="container">
    <div class="news-list">
      <template v-if="!loading">
        <NewsCard v-for="item in news" :item="item" :key="item.code" />
      </template>

      <Skeleton
        :skeleton-length="news.length + skeletonInitial"
        v-if="loading"
      />
    </div>

    <div class="load-more">
      <Button v-if="hasNextPage" @click="handleLoadMore()"
        >Загрузить ещё</Button
      >
    </div>
    <NewsEmpty v-if="!news.length && !error" />
    <NewsError v-if="error" />
  </div>
</template>

<script setup>
import Button from '../UI/Button/Button.vue'
import NewsCard from './NewsCard/NewsCard.vue'
import Skeleton from '../UI/Skeleton/Skeleton.vue'
import NewsEmpty from './NewsEmpty/NewsEmpty.vue'
import NewsError from './NewsError/NewsError.vue'
import { useNews } from '../../composables/useNews'
import { skeletonInitial } from '../../constants'

const { news, hasNextPage, loading, error, handleLoadMore } = useNews()

console.log(error.value)
</script>

<style scoped>
.container {
  margin: 4rem auto;
}
.news-list {
  display: grid;
  gap: 3rem;
  grid-auto-rows: fit-content;
}
.load-more {
  text-align: center;
  margin-top: 4rem;
}

@media (min-width: 900px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: fit-content;

    gap: 3rem;
  }
}

@media (min-width: 1200px) {
  .news-list {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: fit-content;
  }
}
</style>
