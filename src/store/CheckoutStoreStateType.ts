import { Plan } from "@/types/Plan";
import { AddOn } from "@/types/AddOn";

export interface CheckoutStoreStateType {
  name: string;
  email: string;
  plan: Plan;
  addons: AddOn[];
  isBilledYearly: boolean;
}
