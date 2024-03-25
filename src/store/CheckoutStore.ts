import { defaultPlan } from "@/data/plans";

import { reactive } from "vue";
import { Plan } from "@/types/Plan";

const state = reactive({
  name: "",
  plan: defaultPlan,
});

const methods = {
  changePlan(plan: Plan) {
    state.plan = plan;
  },
};

export default {
  state: state,
  methods,
};
