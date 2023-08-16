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
  border: 1px solid #0f62fe;
  color: #0f62fe;
  background-color: transparent;
}
</style>
