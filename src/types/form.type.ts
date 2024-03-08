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
  add_on: SelectedObj[];
}

export interface SelectedObj {
  type: string;
  cost: number;
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
export const monthAddOn: SelectedObj[] = [
  {
    type: "Online service",
    cost: 1,
  },
  {
    type: "Larger storage",
    cost: 2,
  },
  {
    type: "Customizable profile",
    cost: 2,
  },
];
export const yearAddOn: SelectedObj[] = [
  {
    type: "Online service",
    cost: 10,
  },
  {
    type: "Larger storage",
    cost: 20,
  },
  {
    type: "Customizable profile",
    cost: 20,
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
