<template>
  <div class="card">
    <img :src="image" v-if="image" class="card-image" alt="Avatar" />
    <div
      class="card-container"
      :style="{
        paddingTop: image ? '0' : '1.5rem',
        marginTop: image ? '-0.3rem' : '0',
        borderTopRightRadius: image ? '' : 'var(--radius-m, 1rem)',
        borderTopLeftRadius: image ? '' : 'var(--radius-m, 1rem)',
      }"
    >
      <div class="card-content">
        <slot name="content"></slot>
      </div>

      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
})
</script>

<style scoped>
.card {
  background-color: inherit;
  border-radius: var(--radius-m, 1rem);
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;

  position: relative;
  display: flex;
  flex-direction: column;
}

.card-container {
  flex-grow: 1;
  border: 1px solid var(--color-brend-primary, #0f62fe);
  border-right: 1px solid var(--color-brend-primary, #0f62fe);
  border-bottom: 1px solid var(--color-brend-primary, #0f62fe);
  border-left: 1px solid var(--color-brend-primary, #0f62fe);
  border-bottom-left-radius: var(--radius-m, 1rem);
  border-bottom-right-radius: var(--radius-m, 1rem);

  padding-bottom: 4rem;
}
.card-image {
  background-repeat: no-repeat;

  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);

  width: 100%;
  object-fit: cover;
  height: max(250px, 25vh);
  max-height: max(250px, 30vh);
}

.card-content {
  padding: 2em;
}

.card-footer {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
}
</style>
