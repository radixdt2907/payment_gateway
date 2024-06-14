import AddonsModel from "./addons.model";

export default interface PlanModel {

    plan_code: string;
    plan_id: string;
    name: string;
    recurring_price: number;
    interval: number;
    interval_unit: string;
    billing_cycles: number;
    addons: AddonsModel[]
}