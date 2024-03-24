<script setup lang="ts">
import Stepper from "@/components/ui/stepper/Stepper.vue";

const steps = ["Step 1", "Step 2", "Step 3", "hello"];
</script>

<template>
  <div class="h-screen">
    <Stepper :steps="steps">
      <template #item-1>
        <div>step 1 content</div>
      </template>
      <template #item-2>
        <div>step 2 content</div>
        <div>step 2 content</div>
        <div>step 2 content</div>
      </template>
      <template #item-3>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content</div>
        <div>step 3 content last line</div>
      </template>
      <template #item-4>
        <div>
          step 4 content step 4 content step 4 content step 4 content step 4
          content step 4 content step 4 content step 4 content step 4 content
          step 4 content step 4 content step 4 content step 4 content step 4
          content step 4 content step 4 content step 4 content step 4 content
        </div>
      </template>
      <template #item-submit>
        <div>submit</div>
      </template>
    </Stepper>
  </div>
</template>

<style scoped></style>
