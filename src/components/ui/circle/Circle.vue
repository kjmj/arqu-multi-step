<script setup lang="ts">
defineProps<{
  isActive: boolean;
}>();
</script>

<template>
  <span class="circle" :class="isActive ? 'active' : ''">
    <slot />
  </span>
</template>

<style scoped>
.circle {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid;
  color: theme("colors.secondary.DEFAULT");
  transition: all 0.25s ease-in-out;
}

.active {
  color: theme("colors.primary.DEFAULT");
  border: 1px solid theme("colors.secondary.DEFAULT");
  background-color: theme("colors.secondary.DEFAULT");
}
</style>
