export type StationCode = 'BD' | 'BS' | 'BA' | 'TD' | 'LD';

export interface Station {
  id: number;
  code: StationCode;
  name: string;
  shortName: string;
  area: string;
  latitude?: number;
  longitude?: number;
}
