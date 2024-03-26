<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { Plan } from "@/types/Plan";
import { priceText } from "@/utils/string-utils";

const props = defineProps<{
  plan: Plan;
  price: number;
  isYearly: boolean;
  isActive: boolean;
}>();

const radixIcon = computed(() => {
  switch (props.plan.id) {
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
  switch (props.plan.id) {
    case "standard-plan-id": {
      return "#ffbe0b";
    }
    case "pro-plan-id": {
      return "#fb5607";
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
        <div class="text-lg font-bold">{{ plan.name }}</div>
        <div>{{ priceText(isYearly, price) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan-card {
  border: 1px solid theme("colors.gray.lightest");
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
