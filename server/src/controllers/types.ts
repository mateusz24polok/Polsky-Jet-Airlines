export interface GetFlightsRequestQueryParams {
  startingCity?: string;
  destinationCity?: string;
  flightDateFrom?: Date;
  flightDateTo?: Date;
}

export interface GetFlightsModifiedQueryParams
  extends GetFlightsRequestQueryParams {
  startingDate?: {
    lte?: Date;
    gte?: Date;
  };
}
