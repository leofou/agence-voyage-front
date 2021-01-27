import { LocationType } from './locationType.enum';
import { EnumDeclaration } from "typescript";

export class Location {

    public codeLocation: number;
    public locationName: String;
    public type: LocationType;
    public originLocationCode: [number];
    public destinationLocationCode: [number];
}

