<template>
  <Card>
    <!-- <div
      class="card-image"
      :style="{
        borderImage: `url(${item.image})`,
      }"
    ></div> -->
    <img
      :src="
        item?.image || `https://flems.github.io/test/images/placeholder.jpg`
      "
      class="card-image"
      alt="Avatar"
      style="width: 100%"
    />
    {{ item.name }}
  </Card>
</template>

<script setup>
import Card from '../../UI/Card/Card.vue'

defineProps({
  item: {
    name: String,
    previewText: String,
    image: String,
  },
})
</script>

<style scoped>
.card-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}
</style>
