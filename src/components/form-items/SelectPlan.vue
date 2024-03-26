<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { plans } from "@/data/plans";
import checkoutStore from "@/store/CheckoutStore";
import PlanCard from "@/components/ui/plan-card/PlanCard.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import Label from "@/components/ui/label/Label.vue";
</script>

<template>
  <FormContentContainer
    title="Select your plan"
    subtitle="You can choose to be billed monthly or annually"
  >
    <div class="grid grid-rows-2 gap-2 md:grid-cols-2">
      <PlanCard
        v-for="plan in plans"
        :key="plan"
        :name="plan.name"
        :price="
          checkoutStore.state.isBilledYearly
            ? plan.pricePerYear
            : plan.pricePerMonth
        "
        :is-yearly="checkoutStore.state.isBilledYearly"
        @click="checkoutStore.methods.changePlan(plan)"
      >
      </PlanCard>
    </div>
    <div class="flex items-center space-x-2">
      <Label for="yearly-toggle">Monthly</Label>
      <Switch
        id="yearly-toggle"
        :checked="checkoutStore.state.isBilledYearly"
        @update:checked="(v) => (checkoutStore.state.isBilledYearly = v)"
      />
      <Label for="yearly-toggle">Yearly</Label>
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
