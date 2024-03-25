<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  price: number;
  isYearly: boolean;
}>();

const priceText = computed(() => {
  return props.isYearly ? `${props.price}/year` : `${props.price}/month`;
});
</script>

<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ priceText }}</div>
  </div>
</template>

<style scoped></style>
