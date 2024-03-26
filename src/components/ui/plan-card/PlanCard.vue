<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  price: number;
  isYearly: boolean;
  isActive: boolean;
}>();

const priceText = computed(() => {
  return props.isYearly ? `$${props.price}/year` : `$${props.price}/month`;
});
</script>

<template>
  <div
    class="rounded-md plan-card text-left p-3 cursor-pointer"
    :class="isActive ? 'active' : ''"
  >
    <div class="flex md:flex-col">
      <div class="mr-4 md:mb-10">icon</div>
      <div>
        <div>{{ name }}</div>
        <div>{{ priceText }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan-card {
  border: 1px solid theme("colors.secondary.DEFAULT");
  transition: all 0.25s ease-in-out;
}

.plan-card:hover {
  border: 1px solid theme("colors.primary.DEFAULT");
}

.active {
  border: 1px solid theme("colors.primary.DEFAULT");
  background-color: theme("colors.primary.light");
}
</style>
