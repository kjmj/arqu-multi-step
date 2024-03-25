import { Plan } from "@/types/Plan";

export const plans: Plan[] = [
  {
    id: "standard-plan-id",
    name: "Standard",
    pricePerMonth: 10,
    pricePerYear: 100,
  },
  {
    id: "pro-plan-id",
    name: "Pro",
    pricePerMonth: 20,
    pricePerYear: 200,
  },
];

export const defaultPlan = plans[0];
