<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import CheckoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer title="Step 4 title" subtitle="Step 4 subtitle">
    <div>Your name: {{ CheckoutStore.state.name }}</div>
    <div>Plan: {{ CheckoutStore.state.plan.name }}</div>
    <div>Add Ons: {{ CheckoutStore.state.addons.map((a) => a.name) }}</div>
  </FormContentContainer>
</template>

<style scoped></style>
