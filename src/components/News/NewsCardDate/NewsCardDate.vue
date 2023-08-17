<template>
  <div class="card-date">
    <div class="card-date-left">{{ day }}</div>
    <div class="card-date-right">
      <span>{{ month }}</span> <br />
      <span>{{ year }}</span>
    </div>
  </div>
</template>

<script setup>
import { getDate } from '../../../lib/date'

const props = defineProps({
  date: Number,
})

const { day, month, year } = getDate(props.date)
</script>

<style scoped>
.card-date {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-date-left {
  color: var(--grey-color-black-30, #a1a7b5);
  font-family: Nunito Sans;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 2.25rem */
}

.card-date-right {
  color: var(--grey-color-black-30, #a1a7b5);
  font-family: Nunito Sans;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 1.03125rem */
  letter-spacing: -0.00938rem;
}
</style>
