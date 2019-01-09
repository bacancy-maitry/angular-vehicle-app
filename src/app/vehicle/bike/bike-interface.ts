import { VehicleInterface } from "../vehicle-interface";

export interface BikeInterface extends VehicleInterface {
    bikeBrand: string;
    bikeModel: string;
    bikeEngineType: number;
}
