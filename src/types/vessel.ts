export type VesselType = 'express' | 'panorama' | 'cruiser';

export interface Vessel {
  id: number;
  name: string;
  type: VesselType;
  capacity: number;
  amenities: string[];
  description: string;
}
