import { VehicleInterface } from "../vehicle-interface";

export interface CarInterface extends VehicleInterface {
    carType: string;
    carBrand: string;
    carModel: string;
    carEngineType: number;
}
