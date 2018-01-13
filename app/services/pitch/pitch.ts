import { Observable } from "tns-core-modules/data/observable";

export interface Pitch extends Observable {
    id: string;
    type: string;
    attributes?: {
        starts: string;
        ends: string;
        price: string;
        admin_fee: string;
        currency: string;
        availabilities: number;
    };
}