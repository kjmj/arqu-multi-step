<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  price: number;
  isMonthly: boolean;
}>();

const priceText = computed(() => {
  return props.isMonthly ? `${props.price}/month` : `${props.price}/year`;
});
</script>

<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ priceText }}</div>
  </div>
</template>

<style scoped></style>
