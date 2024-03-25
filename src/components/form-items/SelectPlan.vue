<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { plans } from "@/data/plans";
import checkoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer title="Step 2 title" subtitle="Step 2 subtitle">
    <div
      v-for="plan in plans"
      :key="plan"
      @click="checkoutStore.methods.changePlan(plan)"
    >
      {{ plan.name }}
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
