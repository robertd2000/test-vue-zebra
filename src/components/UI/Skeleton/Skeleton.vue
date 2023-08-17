<template>
  <Card image="" v-for="i in skeletonLength" :key="i" class="is-loading">
    <div class="card-date">
      <div class="card-date-left">
        <p></p>
      </div>
    </div>
    <div class="car-title">
      <h2></h2>
    </div>
    <div class="card-description">
      <p></p>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card/Card.vue'

defineProps({
  skeletonLength: Number,
})
</script>

<style scoped>
.is-loading img {
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

.is-loading h2 {
  height: 40px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

.is-loading p {
  height: 70px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
