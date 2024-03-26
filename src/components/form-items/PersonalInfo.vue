<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import CheckoutStore from "@/store/CheckoutStore";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormLabel from "@/components/ui/form/FormLabel.vue";
import Input from "@/components/ui/input/Input.vue";

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
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              v-model="CheckoutStore.state.name"
              type="text"
              placeholder="Jane Doe"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              v-model="CheckoutStore.state.email"
              type="text"
              placeholder="jane@gmail.com"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </FormContentContainer>
</template>

<style scoped></style>
