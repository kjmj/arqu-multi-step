<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import LabeledInput from "@/components/ui/labeled-input/LabeledInput.vue";
import CheckoutStore from "@/store/CheckoutStore";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

defineProps<{
  formId: string;
}>();
</script>

<template>
  <FormContentContainer
    title="Personal information"
    subtitle="Please provide your name"
  >
    <form :id="formId" @submit.prevent>
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormControl>
            <LabeledInput
              id="name-input"
              v-model="CheckoutStore.state.name"
              label="Name"
              placeholder="Jane Doe"
              v-bind="componentField"
            ></LabeledInput>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </FormContentContainer>
</template>

<style scoped></style>
