<script setup lang="ts">
import Stepper from "@/components/ui/stepper/Stepper.vue";
import PersonalInfo from "@/components/form-items/PersonalInfo.vue";
import AddOns from "@/components/form-items/AddOns.vue";
import SelectPlan from "@/components/form-items/SelectPlan.vue";
import Summary from "@/components/form-items/Summary.vue";
import Submit from "@/components/form-items/Submit.vue";

const steps = ["YOUR INFO", "SELECT A PLAN", "SELECT ADD-ONS", "SUMMARY"];
</script>

<template>
  <div class="h-screen">
    <div
      class="h-full md:place-content-center bg-off_white md:flex md:items-center md:justify-center"
    >
      <Stepper
        :steps="steps"
        class="md:w-[min(100%,800px)] md:h-[min(100%,550px)]"
      >
        <template #item-1><PersonalInfo /></template>
        <template #item-2><SelectPlan /></template>
        <template #item-3><AddOns /></template>
        <template #item-4><Summary /></template>
        <template #item-submit> <Submit /></template>
      </Stepper>
    </div>
  </div>
</template>

<style scoped></style>
