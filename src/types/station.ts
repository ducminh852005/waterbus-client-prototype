export type StationCode = 'BD' | 'BS' | 'BA' | 'TD' | 'LD';

export interface Station {
  code: StationCode;
  name: string;
  shortName: string;
  area: string;
}
