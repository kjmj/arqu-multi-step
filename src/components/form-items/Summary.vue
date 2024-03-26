<script setup lang="ts">
import FormContentContainer from "@/components/ui/form-content-container/FormContentContainer.vue";
import { priceText } from "@/utils/string-utils";
import checkoutStore from "@/store/CheckoutStore";
</script>

<template>
  <FormContentContainer
    title="Finishing up"
    subtitle="Please make sure everything looks good before continuing"
  >
    <div class="bg-primary-light rounded-md">
      <div>{{ checkoutStore.state.name }}</div>
      <div>-----</div>
      <div class="flex justify-between">
        <div>{{ checkoutStore.state.plan.name }}</div>
        <div>
          {{
            priceText(
              checkoutStore.state.isBilledYearly,
              checkoutStore.methods.planPrice(),
            )
          }}
        </div>
      </div>
      <div>-----</div>
      <div v-if="checkoutStore.state.addons.length > 0">
        <div
          v-for="addon in checkoutStore.state.addons"
          :key="addon"
          class="flex justify-between"
        >
          <div>{{ addon.name }}</div>
          <div>
            {{
              priceText(
                checkoutStore.state.isBilledYearly,
                checkoutStore.methods.addOnPrice(addon),
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div>Total</div>

      <div>
        {{
          priceText(
            checkoutStore.state.isBilledYearly,
            checkoutStore.methods.totalPriceSelected(),
          )
        }}
      </div>
    </div>
  </FormContentContainer>
</template>

<style scoped></style>
