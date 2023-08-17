<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.badge {
  padding: 0.25rem 1rem;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: var(--radius-full, 22.5rem);
  background: var(--bg-bg-5, #f0f6fe);
  color: var(--link-link-dark-default, #00133a);
  font-family: Nunito Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.225rem */

  transition: all linear 0.2s;
}

.badge:hover {
  background: var(--bg-bg-5, #e6edf7);
}
</style>
