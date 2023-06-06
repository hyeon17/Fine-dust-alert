export interface ILocation {
  items: ILocationItem[];
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export interface ILocationItem {
  coFlag?: string;
  coGrade?: string;
  coValue?: string;
  dataTime: string;
  khaiGrade?: string;
  khaiValue?: string;
  no2Flag?: string;
  no2Grade?: string;
  no2Value?: string;
  o3Flag?: string;
  o3Grade?: string;
  o3Value?: string;
  pm10Flag?: string;
  pm10Grade?: string;
  pm10Value?: string;
  pm25Flag?: string;
  pm25Grade?: string;
  pm25Value?: string;
  sidoName?: string;
  so2Flag?: string;
  so2Grade?: string;
  so2Value?: string;
  stationName?: string;
}