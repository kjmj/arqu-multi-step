<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { useFormField } from "@/components/ui/form/useFormField";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const { error, formItemId } = useFormField();
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border border-destructive focus-visible:ring-destructive',
        props.class,
      )
    "
    :for="formItemId"
  />
</template>
