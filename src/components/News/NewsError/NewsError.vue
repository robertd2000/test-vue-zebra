<template>
  <div class="error">Произошла ошибка, поробуйте перезагрузить страницу</div>
</template>

<script setup></script>

<style scoped>
.error {
  padding: 3rem 4rem;
  background-color: rgb(243, 194, 194);
  color: red;
  border: 2px solid var(--color-brend-primary, red);
  border-radius: var(--radius-m, 1rem);

  align-self: end;
  margin-bottom: 14rem;

  color: var(--grey-color-black-90, red);
  font-family: 'Nunito Sans';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 3rem */
  letter-spacing: -0.025rem;
  text-align: center;
}
</style>
