<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Button from "@/components/ui/button/Button.vue";
import { to1BasedIdx } from "@/utils/string-utils";
import { useRouter } from "vue-router";
import Circle from "@/components/ui/circle/Circle.vue";

const router = useRouter();

const props = defineProps<{
  steps: any[];
}>();

const currentStep = ref(1);

function goBackClicked(): void {
  currentStep.value -= 1;
}

function nextStepClicked(): void {
  currentStep.value += 1;
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

onMounted(() => {
  pushToStep(1);
});

watch(currentStep, (newCurrentStep) => {
  pushToStep(newCurrentStep);
});
</script>

<template>
  <div class="h-full bg-white md:p-2 rounded-md shadow-md">
    <div
      class="h-full flex flex-col grow md:flex-row bg-off_white md:bg-transparent"
    >
      <div
        class="flex whitespace-nowrap md:flex-col bg-med_blue gap-8 justify-center md:justify-start md:rounded-md py-8 md:p-8"
      >
        <div
          v-for="(step, idx) in steps"
          :key="'step-' + idx"
          class="flex items-center gap-3 cursor-pointer"
          @click="pushToStep(to1BasedIdx(idx))"
        >
          <Circle :is-active="isIdxCurrentStep(idx)">{{
            to1BasedIdx(idx)
          }}</Circle>
          <div class="hidden md:block">
            <div class="text-off_white">{{ "STEP " + to1BasedIdx(idx) }}</div>
            <div class="text-white font-bold">{{ step }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col grow justify-between min-h-0 p-4 md:p8">
        <div
          class="overflow-y-auto rounded bg-white shadow-md md:shadow-none p-4 md:p-0 mx-2 sm:mx-10"
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
          <Button class="justify-self-end ml-auto" @click="nextStepClicked">{{
            nextStepButtonText
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
