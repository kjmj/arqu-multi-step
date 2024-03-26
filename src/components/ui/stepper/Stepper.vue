<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Button from "@/components/ui/button/Button.vue";
import { to0BasedIdx, to1BasedIdx } from "@/utils/string-utils";
import { useRouter } from "vue-router";
import Circle from "@/components/ui/circle/Circle.vue";
import { StepperStep } from "@/types/StepperStep";

const router = useRouter();

const props = defineProps<{
  steps: StepperStep[];
}>();

const currentStep = ref(1);

function goBackClicked(): void {
  currentStep.value -= 1;
}

async function nextStepClicked(): Promise<void> {
  // try to validate the forms
  // if one is invalid, bring them to that step
  for (const [i, step] of Object.values(props.steps).entries()) {
    if (step.form) {
      const result = await step.form.validate();
      if (!result.valid) {
        currentStep.value = to1BasedIdx(i);
        break;
      }
    }
  }

  // advance to the next step if the form is valid (or there is no form) on this step
  if (currentStepObj.value.form) {
    const result = await currentStepObj.value.form.validate();
    if (result.valid) {
      currentStep.value += 1;
    }
  } else {
    currentStep.value += 1;
  }
}

function isIdxCurrentStep(idx: number): boolean {
  return currentStep.value === to1BasedIdx(idx);
}

function pushToStep(step: number): void {
  if (step !== currentStep.value) {
    // update the current step
    currentStep.value = step;
  }
  router.push({
    name: "app",
    params: { step: stepRouteText(step) },
  });
}

function stepRouteText(step: number): string {
  if (isStepperBeforeSubmit.value) {
    return "step-" + step.toString();
  } else {
    return "submit";
  }
}

const isStepperBeforeSubmit = computed(() => {
  return currentStep.value <= props.steps.length;
});

const isStepperPastStep1 = computed(() => {
  return currentStep.value > 1;
});

const showSubmitItem = computed(() => {
  return currentStep.value > props.steps.length;
});

const nextStepButtonText = computed(() => {
  return currentStep.value === props.steps.length ? "Submit" : "Next Step";
});

const currentStepObj = computed(() => {
  return props.steps[to0BasedIdx(currentStep.value)];
});

onMounted(() => {
  pushToStep(1);
});

watch(currentStep, (newCurrentStep) => {
  pushToStep(newCurrentStep);
});
</script>

<template>
  <div class="h-full bg-white md:p-2 rounded-lg shadow">
    <div
      class="h-full flex flex-col grow md:flex-row bg-gray-lightest md:bg-transparent"
    >
      <div
        class="flex whitespace-nowrap md:flex-col bg-gradient-to-tr from-[#a067f0] to-[#5d13c5] gap-8 justify-center md:justify-start md:rounded-lg py-8 md:p-8"
      >
        <div
          v-for="(step, idx) in steps"
          :key="'step-' + idx"
          class="flex items-center gap-3"
          :class="
            isStepperBeforeSubmit ? 'cursor-pointer' : 'cursor-not-allowed'
          "
          @click="
            isStepperBeforeSubmit ? pushToStep(to1BasedIdx(idx)) : () => {}
          "
        >
          <Circle :is-active="isIdxCurrentStep(idx)">{{
            to1BasedIdx(idx)
          }}</Circle>
          <div class="hidden md:block">
            <div class="text-gray-lightest">
              {{ "STEP " + to1BasedIdx(idx) }}
            </div>
            <div class="text-white font-bold">{{ step.text }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col grow justify-between min-h-0 p-4 md:p8">
        <div
          class="overflow-y-auto rounded-lg bg-white shadow md:shadow-none p-4 md:p-0 mx-2 sm:mx-10"
        >
          <div
            v-for="(step, idx) in steps"
            v-show="isIdxCurrentStep(idx)"
            :key="'slot-container-' + to1BasedIdx(idx)"
          >
            <slot :name="'item-' + to1BasedIdx(idx)"></slot>
          </div>
          <div v-show="showSubmitItem">
            <slot name="item-submit"></slot>
          </div>
        </div>
        <div v-show="isStepperBeforeSubmit" class="flex justify-between">
          <Button
            v-show="isStepperPastStep1"
            variant="ghost"
            @click="goBackClicked"
            >Go Back</Button
          >
          <Button
            class="justify-self-end ml-auto"
            :form="currentStepObj?.formId"
            type="submit"
            @click="nextStepClicked"
            >{{ nextStepButtonText }}</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
