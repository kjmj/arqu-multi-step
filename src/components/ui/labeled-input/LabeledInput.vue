<script setup lang="ts">
import Label from "@/components/ui/label/Label.vue";
import Input from "@/components/ui/input/Input.vue";

defineProps<{
  id: string;
  label: string;
  placeholder: string;
}>();
</script>

<template>
  <div class="grid w-full items-center gap-1.5">
    <Label :for="id">{{ label }}</Label>
    <Input :id="id" :placeholder="placeholder" v-bind="$attrs" />
  </div>
</template>

<style scoped></style>
