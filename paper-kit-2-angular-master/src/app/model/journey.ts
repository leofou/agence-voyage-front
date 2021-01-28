export abstract class Journey {
    journeyId: number;
    originLocationCodeId: number;
    destinationLocationCodeId: number;
    operatingCompanyId: number;
    startDate : Date;
    endDate : Date;
    customerIds : number[];
}
