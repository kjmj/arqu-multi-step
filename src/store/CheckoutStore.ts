import { defaultPlan } from "@/data/plans";

import { reactive } from "vue";
import { Plan } from "@/types/Plan";
import { AddOn } from "@/types/AddOn";

const state = reactive({
  name: "",
  plan: defaultPlan,
  addons: [],
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
};

export default {
  state: state,
  methods,
};
