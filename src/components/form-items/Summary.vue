<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import CheckoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer
    title="Finishing up"
    subtitle="Please make sure everything looks good before continuing"
  >
    <div>Your name: {{ CheckoutStore.state.name }}</div>
    <div>Plan: {{ CheckoutStore.state.plan.name }}</div>
    <div>Add Ons: {{ CheckoutStore.state.addons.map((a) => a.name) }}</div>
  </FormContentContainer>
</template>

<style scoped></style>
