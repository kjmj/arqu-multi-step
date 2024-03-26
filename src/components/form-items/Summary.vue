<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { priceText } from "@/utils/string-utils";
import checkoutStore from "@/store/CheckoutStore";
import Separator from "@/components/ui/separator/Separator.vue";
</script>

<template>
  <FormContentContainer
    title="Finishing up"
    subtitle="Please check that everything looks correct"
  >
    <div class="bg-primary-medium rounded-md p-4 md:px-8">
      <div>{{ checkoutStore.state.name }}</div>
      <div>{{ checkoutStore.state.email }}</div>
      <Separator
        v-if="checkoutStore.state.name || checkoutStore.state.email"
        class="my-4"
      />

      <div class="flex justify-between text-lg font-bold">
        <div>{{ checkoutStore.state.plan.name }}</div>
        <div>
          {{
            priceText(
              checkoutStore.state.isBilledYearly,
              checkoutStore.getters.currentPlanPrice(),
            )
          }}
        </div>
      </div>

      <div v-if="checkoutStore.state.addons.length > 0">
        <Separator class="my-4" />
        <div
          v-for="addon in checkoutStore.state.addons"
          :key="addon.id"
          class="flex justify-between"
        >
          <div class="text-gray-light">{{ addon.name }}</div>
          <div class="font-bold">
            {{
              priceText(
                checkoutStore.state.isBilledYearly,
                checkoutStore.getters.addOnPrice(addon),
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between p-4 pt-6 md:px-8 md:pt-10">
      <div>Total</div>

      <div class="text-lg font-bold text-primary">
        {{
          priceText(
            checkoutStore.state.isBilledYearly,
            checkoutStore.getters.totalPriceSelected(),
          )
        }}
      </div>
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
