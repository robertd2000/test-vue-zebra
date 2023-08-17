<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
.btn {
  padding: 1rem 2rem;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid #002dbf;
  background-color: transparent;

  color: var(--button-button-bordered-default, #002dbf);
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 1.5rem */
  letter-spacing: -0.0125rem;

  transition: all linear 0.2s;
}

.btn:hover {
  color: var(--button-button-bordered-default, #fcfcfc);
  background-color: var(--button-button-bordered-default, #002dbf);
}
</style>
