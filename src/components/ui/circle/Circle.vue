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
  color: theme("colors.gray.lightest");
  transition: all 0.25s ease-in-out;
}

.active {
  color: initial;
  border: 1px solid theme("colors.gray.lightest");
  background-color: theme("colors.gray.lightest");
}
</style>
