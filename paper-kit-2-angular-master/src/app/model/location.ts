import { EnumDeclaration } from "typescript";

export class Location {

    codeLocation: number;
    locationName: String;
    locationType : EnumDeclaration;
    originLocationCode: [];
    destinationLocationCode: [];
}
