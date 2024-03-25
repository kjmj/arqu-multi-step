<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <slot />
  </div>
</template>

<style scoped></style>
