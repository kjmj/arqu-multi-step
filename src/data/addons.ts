import { AddOn } from "@/types/AddOn";

export const addons: AddOn[] = [
  {
    id: "addon-1",
    name: "More storage",
    description: "An extra 10GB of storage per app",
    pricePerMonth: 1,
    pricePerYear: 10,
  },
  {
    id: "addon-2",
    name: "Unlimited API calls",
    description: "Call our APIs as much as you'd like",
    pricePerMonth: 5,
    pricePerYear: 50,
  },
  {
    id: "addon-3",
    name: "Test environment",
    description: "You can start up a test version of your app",
    pricePerMonth: 10,
    pricePerYear: 100,
  },
];
