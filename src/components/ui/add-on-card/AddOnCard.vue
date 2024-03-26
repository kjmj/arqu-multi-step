<script setup lang="ts">
import { AddOn } from "@/types/AddOn";
import { priceText } from "@/utils/string-utils";
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";
const props = defineProps<{
  addon: AddOn;
  price: number;
  isYearly: boolean;
  isSelected: boolean;
}>();
</script>

<template>
  <div
    class="rounded-md add-on-card text-left p-3 cursor-pointer"
    :class="props.isSelected ? 'active' : ''"
  >
    <div class="flex items-center">
      <Checkbox :checked="props.isSelected" class="mr-4" />
      <div class="grow">
        <div class="text-md font-bold">{{ props.addon.name }}</div>
        <div>{{ props.addon.description }}</div>
      </div>
      <div>{{ priceText(isYearly, price) }}</div>
    </div>
  </div>
</template>

<style scoped>
.add-on-card {
  border: 1px solid theme("colors.gray.lightest");
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
