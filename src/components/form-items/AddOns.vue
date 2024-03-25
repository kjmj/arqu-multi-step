<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { addons } from "@/data/addons";
import checkoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer title="Step 3 title" subtitle="Step 3 subtitle">
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
