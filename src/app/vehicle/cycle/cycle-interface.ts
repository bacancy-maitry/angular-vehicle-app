import { VehicleInterface } from "../vehicle-interface";

export interface CycleInterface extends VehicleInterface {
    cycleBrand: string;
    cycleModel: string;
    cyclePurchaseYear: number;
    cyclePrice: number;
}
