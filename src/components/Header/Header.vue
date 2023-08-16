<template>
  <div class="header">
    <div class="title">
      <h2>Новости</h2>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  height: 320px;
  background-image: url('../../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: contain;
}

.title {
  display: grid;
  align-items: start;
  max-width: 1700px;
  margin: auto;
}

.title h2 {
  align-self: end;
  margin-top: 14rem;

  color: var(--grey-color-black-90, #17171a);
  font-family: 'Nunito Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 3rem */
  letter-spacing: -0.025rem;
}
</style>
