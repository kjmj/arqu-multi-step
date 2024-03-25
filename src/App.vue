<script setup lang="ts">
import Stepper from "@/components/ui/stepper/Stepper.vue";
import PersonalInfo from "@/components/form-items/PersonalInfo.vue";
import AddOns from "@/components/form-items/AddOns.vue";
import SelectPlan from "@/components/form-items/SelectPlan.vue";
import Summary from "@/components/form-items/Summary.vue";
import Submit from "@/components/form-items/Submit.vue";

const steps = [
  "custom text step 1",
  "custom text step 2",
  "custom text step 3",
  "custom text step 4",
];
</script>

<template>
  <div class="h-screen">
    <Stepper :steps="steps">
      <template #item-1><PersonalInfo /></template>
      <template #item-2><SelectPlan /></template>
      <template #item-3><AddOns /></template>
      <template #item-4><Summary /></template>
      <template #item-submit> <Submit /></template>
    </Stepper>
  </div>
</template>

<style scoped></style>
