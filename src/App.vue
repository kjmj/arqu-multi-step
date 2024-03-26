<script setup lang="ts">
import Stepper from "@/components/ui/stepper/Stepper.vue";
import PersonalInfo from "@/components/form-items/PersonalInfo.vue";
import AddOns from "@/components/form-items/AddOns.vue";
import SelectPlan from "@/components/form-items/SelectPlan.vue";
import Summary from "@/components/form-items/Summary.vue";
import Submit from "@/components/form-items/Submit.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const personalInfoFormId = "my-form-1";
const personalInfoForm = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(2, {
        message: "Name must be at least 2 characters",
      }),
      email: z.string().email("This is not a valid email"),
    }),
  ),
});

const steps = [
  {
    text: "YOUR INFO",
    form: personalInfoForm,
    formId: personalInfoFormId,
  },
  {
    text: "SELECT PLAN",
  },
  {
    text: "SELECT ADD-ONS",
  },
  {
    text: "SUMMARY",
  },
];
</script>

<template>
  <div class="h-screen">
    <div
      class="h-full md:place-content-center bg-gray-lightest md:flex md:items-center md:justify-center md:p-8"
    >
      <Stepper
        :steps="steps"
        class="md:w-[min(100%,800px)] md:h-[min(100%,550px)]"
      >
        <template #item-1
          ><PersonalInfo :form-id="personalInfoFormId"
        /></template>
        <template #item-2><SelectPlan /></template>
        <template #item-3><AddOns /></template>
        <template #item-4><Summary /></template>
        <template #item-submit> <Submit /></template>
      </Stepper>
    </div>
  </div>
</template>

<style scoped></style>
