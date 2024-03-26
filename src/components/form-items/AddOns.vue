<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { addons } from "@/data/addons";
import checkoutStore from "@/store/CheckoutStore";
import AddOnCard from "@/components/ui/add-on-card/AddOnCard.vue";
import { AddOn } from "@/types/AddOn";

function isAddOnSelected(addon: AddOn): boolean {
  return checkoutStore.state.addons.some((a) => a.id === addon.id);
}
</script>

<template>
  <FormContentContainer
    title="Select your add-ons"
    subtitle="Add ons supercharge your plan"
  >
    <div class="grid grid-rows-1 gap-3">
      <AddOnCard
        v-for="addon in addons"
        :key="addon.id"
        :price="checkoutStore.getters.addOnPrice(addon)"
        :is-yearly="checkoutStore.state.isBilledYearly"
        :addon="addon"
        :is-selected="isAddOnSelected(addon)"
        @click="checkoutStore.methods.toggleAddOn(addon)"
      >
      </AddOnCard>
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
