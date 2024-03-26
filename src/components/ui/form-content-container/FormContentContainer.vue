<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-3xl text-primary font-bold">{{ title }}</h1>
    <p class="text-light_gray mb-8">{{ subtitle }}</p>
    <div class="p-1"><slot /></div>
  </div>
</template>

<style scoped></style>
