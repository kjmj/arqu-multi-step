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
    subtitle="Please provide your name and email"
  >
    <form :id="formId" class="grid gap-6" @submit.prevent>
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <div class="flex items-center justify-between">
            <FormLabel>Name</FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Input
              v-bind="componentField"
              v-model="CheckoutStore.state.name"
              type="text"
              placeholder="Jane Doe"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <div class="flex items-center justify-between">
            <FormLabel>Email</FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Input
              v-bind="componentField"
              v-model="CheckoutStore.state.email"
              type="text"
              placeholder="jane@gmail.com"
            />
          </FormControl>
        </FormItem>
      </FormField>
    </form>
  </FormContentContainer>
</template>

<style scoped></style>
