<template>
  <div class="footer">
    <div class="footer-inner container">
      <div class="footer-title">
        <img src="../../assets/logo.svg" class="logo" alt="Logo" />
        <p>© alpha, 2023</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #f0f6fe;
}

.footer-inner {
  height: 202px;
  display: flex;
  justify-content: start;
  align-items: center;
  vertical-align: middle;
}

.footer-title {
  display: flex;
  flex-direction: column;
  gap: 1;
  color: #81899d;
}
.logo {
  height: 36px;
}
</style>
