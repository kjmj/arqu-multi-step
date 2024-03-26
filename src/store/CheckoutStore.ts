import { defaultPlan } from "@/data/plans";

import { reactive } from "vue";
import { Plan } from "@/types/Plan";
import { AddOn } from "@/types/AddOn";

const state = reactive({
  name: "",
  plan: defaultPlan,
  addons: [],
  isBilledYearly: false,
});

const methods = {
  changePlan(plan: Plan) {
    state.plan = plan;
  },
  toggleAddOn(addon: AddOn): void {
    if (state.addons.includes(addon)) {
      const index = state.addons.indexOf(addon);
      if (index > -1) {
        state.addons.splice(index, 1);
      }
    } else {
      state.addons.push(addon);
    }
  },
  planPrice(): number {
    return state.isBilledYearly
      ? state.plan.pricePerYear
      : state.plan.pricePerMonth;
  },
  addOnPrice(addon: AddOn): number {
    return state.isBilledYearly ? addon.pricePerYear : addon.pricePerMonth;
  },
  totalPriceSelected(): number {
    let totalPrice = 0;
    totalPrice += state.isBilledYearly
      ? state.plan.pricePerYear
      : state.plan.pricePerMonth;
    state.addons.forEach((a) => {
      totalPrice += state.isBilledYearly ? a.pricePerYear : a.pricePerMonth;
    });
    return totalPrice;
  },
};

export default {
  state: state,
  methods,
};
