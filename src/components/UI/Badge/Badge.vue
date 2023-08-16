<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.badge {
  padding: 1rem 2rem;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid #0f62fe;
  color: #0f62fe;
}
</style>
