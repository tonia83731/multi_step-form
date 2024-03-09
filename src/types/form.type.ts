export enum FormSteps {
  PersonalInfo,
  Plan,
  AddOn,
  Summarize,
  Thankyou,
}

export interface IFormItems {
  name: string;
  email: string;
  phone: string;
  plan: Selected; // could be "month" or "year"
  plan_type: SelectedObj[];
  add_on: AddonObj[];
}

export interface SelectedObj {
  type: string;
  cost: number;
}
export interface AddonObj extends SelectedObj {
  id: string;
  description: string;
}
export type Selected = "month" | "year";
export const monthPlan: SelectedObj[] = [
  {
    type: "Arcade",
    cost: 9,
  },
  {
    type: "Advanced",
    cost: 12,
  },
  {
    type: "Pro",
    cost: 15,
  },
];
export const yearPlan: SelectedObj[] = [
  {
    type: "Arcade",
    cost: 90,
  },
  {
    type: "Advanced",
    cost: 120,
  },
  {
    type: "Pro",
    cost: 150,
  },
];
export const monthAddOn: AddonObj[] = [
  {
    id: "online",
    type: "Online service",
    cost: 1,
    description: "Access to multiplayer games",
  },
  {
    id: "large-storage",
    type: "Larger storage",
    cost: 2,
    description: "Extra 1TB of cloud save",
  },
  {
    id: "customize",
    type: "Customizable profile",
    cost: 2,
    description: "Custom theme on your profile",
  },
];
export const yearAddOn: AddonObj[] = [
  {
    id: "online",
    type: "Online service",
    cost: 10,
    description: "Access to multiplayer games",
  },
  {
    id: "large-storage",
    type: "Larger storage",
    cost: 20,
    description: "Extra 1TB of cloud save",
  },
  {
    id: "customize",
    type: "Customizable profile",
    cost: 20,
    description: "Custom theme on your profile",
  },
];

export const PlanType = {
  month: monthPlan,
  year: yearPlan,
};
export const AddOnType = {
  month: monthAddOn,
  year: yearAddOn,
};
