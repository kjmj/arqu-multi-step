<script setup lang="ts">
import { computed } from "vue";
import { AddOn } from "@/types/AddOn";
const props = defineProps<{
  addon: AddOn;
  price: number;
  isYearly: boolean;
  isSelected: boolean;
}>();

const priceText = computed(() => {
  return props.isYearly ? `$${props.price}/year` : `$${props.price}/month`;
});
</script>

<template>
  <div
    class="rounded-md add-on-card text-left p-3 cursor-pointer"
    :class="props.isSelected ? 'active' : ''"
  >
    <div class="flex">
      <div class="grow">
        <div class="text-lg font-bold">{{ props.addon.name }}</div>
        <div>{{ props.addon.description }}</div>
      </div>
      <div>{{ priceText }}</div>
    </div>
  </div>
</template>

<style scoped>
.add-on-card {
  border: 1px solid theme("colors.secondary.DEFAULT");
  transition: all 0.25s ease-in-out;
}

.add-on-card:hover {
  border: 1px solid theme("colors.primary.DEFAULT");
}

.active {
  border: 1px solid theme("colors.primary.DEFAULT");
  background-color: theme("colors.primary.light");
}
</style>
