<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  planId: string;
  name: string;
  price: number;
  isYearly: boolean;
  isActive: boolean;
}>();

const priceText = computed(() => {
  return props.isYearly ? `$${props.price}/year` : `$${props.price}/month`;
});

const radixIcon = computed(() => {
  switch (props.planId) {
    case "standard-plan-id": {
      return "radix-icons:lightning-bolt";
    }
    case "pro-plan-id": {
      return "radix-icons:star";
    }
    default: {
      return "";
    }
  }
});

const iconColor = computed(() => {
  switch (props.planId) {
    case "standard-plan-id": {
      return "#fcba03";
    }
    case "pro-plan-id": {
      return "#15c260";
    }
    default: {
      return "";
    }
  }
});
</script>

<template>
  <div
    class="rounded-md plan-card text-left p-3 cursor-pointer"
    :class="isActive ? 'active' : ''"
  >
    <div class="flex items-center md:items-start md:flex-col">
      <Icon
        :icon="radixIcon"
        class="h-[2rem] w-[2rem] mr-4 md:mb-12"
        :color="iconColor"
      />
      <div>
        <div class="text-lg font-bold">{{ name }}</div>
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
