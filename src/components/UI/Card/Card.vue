<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  background-color: inherit;
  border: 1px solid var(--color-brend-primary, #0f62fe);
  border-radius: var(--radius-m, 1rem);
}
</style>
