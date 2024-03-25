<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import CheckoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer title="Step 4 title" subtitle="Step 4 subtitle">
    <div>step 4 content</div>
    <div>{{ CheckoutStore.state }}</div>
  </FormContentContainer>
</template>

<style scoped></style>
