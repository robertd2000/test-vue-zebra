<template>
  <Card :image="item?.image">
    <template v-slot:content>
      <NewsCardDate :date="item.date" />
      <div class="car-title">
        <a :href="item.link">
          {{ item.name }}
        </a>
      </div>
      <div class="card-description">
        {{ item.previewText }}
      </div>
    </template>

    <template v-slot:footer>
      <Badge :id="item?.type?.xmlId || ''">{{ item?.type?.value || '' }}</Badge>
    </template>
  </Card>
</template>

<script setup>
import Card from '../../UI/Card/Card.vue'
import Badge from '../../UI/Badge/Badge.vue'
import NewsCardDate from '../NewsCardDate/NewsCardDate.vue'

const props = defineProps({
  item: {
    name: String,
    link: String,
    previewText: String,
    image: String,
    date: Number,
    type: [Object],
  },
})
</script>

<style scoped>
.car-title {
  margin-top: 1rem;
  color: var(--link-link-color-default, #0c5bef);
  font-family: 'Nunito Sans';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 1.65rem */
  cursor: pointer;
}

.card-description {
  color: var(--grey-color-black-85, #222327);
  margin-top: 1rem;

  font-family: Nunito Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.625rem */
  letter-spacing: -0.0125rem;
}
</style>
