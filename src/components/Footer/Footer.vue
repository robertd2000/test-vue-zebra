<template>
  <div class="footer">
    <div class="footer-inner">
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
  margin-top: 6rem;
}

.footer-inner {
  height: 202px;
  display: flex;
  justify-content: start;
  align-items: center;
  vertical-align: middle;
  max-width: 1700px;
  margin: auto;
}

.footer-title {
  display: block;
  color: #81899d;
}
.logo {
  height: 32px;
}
</style>
