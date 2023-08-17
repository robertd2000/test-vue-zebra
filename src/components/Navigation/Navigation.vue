<template>
  <div class="navigation">
    <div class="container">
      <div class="navigation-wrapper">
        <img src="../../assets/logo.svg" class="logo" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.navigation {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.navigation-wrapper {
  height: 123px;
  display: flex;
  justify-content: start;
  align-items: center;
  vertical-align: middle;
}
.logo {
  height: 48px;
}
</style>
