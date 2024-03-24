<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Button from "@/components/ui/button/Button.vue";
import { to1BasedIdx } from "@/utils/string-utils";
import { useRouter } from "vue-router";

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

function showCurrentStepItem(idx: number): boolean {
  return currentStep.value === to1BasedIdx(idx);
}

function pushToStep(step: string): void {
  router.push({
    name: "app",
    params: { step: step },
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
  pushToStep(stepRouteText(1));
});

watch(currentStep, (newCurrentStep) => {
  pushToStep(stepRouteText(newCurrentStep));
});
</script>

<template>
  <div class="h-full flex flex-col grow md:flex-row">
    <div class="flex whitespace-nowrap md:flex-col bg-green-600">
      <div v-for="(step, idx) in steps" :key="'step-' + idx">
        <div>{{ to1BasedIdx(idx) }}</div>
        <div class="hidden md:block">{{ step }}</div>
      </div>
    </div>
    <div class="flex flex-col grow justify-between min-h-0 bg-red-600">
      <div class="overflow-y-auto">
        <div
          v-for="(step, idx) in steps"
          v-show="showCurrentStepItem(idx)"
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
</template>
