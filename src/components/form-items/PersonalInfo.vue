<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import LabeledInput from "@/components/ui/labeled-input/LabeledInput.vue";
import CheckoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer title="Step 1 title" subtitle="Step 1 subtitle">
    <LabeledInput
      id="name-input"
      v-model="CheckoutStore.state.name"
      label="Name"
      placeholder="Jane Doe"
    ></LabeledInput>
  </FormContentContainer>
</template>

<style scoped></style>
