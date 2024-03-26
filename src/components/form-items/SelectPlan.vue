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
    <div class="flex flex-col align-center">
      <div class="grid grid-rows-1 gap-3 md:grid-cols-2">
        <PlanCard
          v-for="plan in plans"
          :key="plan"
          :plan="plan"
          :price="
            checkoutStore.state.isBilledYearly
              ? plan.pricePerYear
              : plan.pricePerMonth
          "
          :is-yearly="checkoutStore.state.isBilledYearly"
          :is-active="checkoutStore.state.plan.id === plan.id"
          @click="checkoutStore.methods.changePlan(plan)"
        >
        </PlanCard>
      </div>
      <div
        class="flex justify-center space-x-2 p-4 bg-primary-light w-full mt-8 rounded-md"
      >
        <Label
          for="yearly-toggle"
          class="flex items-center"
          :class="checkoutStore.state.isBilledYearly ? '' : 'font-extrabold'"
          >Monthly</Label
        >
        <Switch
          id="yearly-toggle"
          :checked="checkoutStore.state.isBilledYearly"
          class="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
          @update:checked="(v) => (checkoutStore.state.isBilledYearly = v)"
        />
        <Label
          for="yearly-toggle"
          class="flex items-center"
          :class="checkoutStore.state.isBilledYearly ? 'font-extrabold' : ''"
          >Yearly</Label
        >
      </div>
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
