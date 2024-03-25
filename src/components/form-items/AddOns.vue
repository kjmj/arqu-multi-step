<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { addons } from "@/data/addons";
import checkoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer
    title="Select your add-ons"
    subtitle="Add ons supercharge your plan"
  >
    <div
      v-for="addon in addons"
      :key="addon"
      @click="checkoutStore.methods.toggleAddOn(addon)"
    >
      {{ addon.name }}
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
