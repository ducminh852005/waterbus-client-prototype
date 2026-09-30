import type { Vessel } from '../types';

export const VESSELS: Vessel[] = [
  {
    id: 1,
    name: 'Tàu Express 75 Chỗ',
    type: 'express',
    capacity: 75,
    amenities: ['Wifi 5G', 'Áo phao cá nhân', 'Cổng sạc USB'],
    description: 'Cabin kín máy lạnh, khoang mở phía sau đón gió.',
  },
  {
    id: 2,
    name: 'Tàu Panorama 360°',
    type: 'panorama',
    capacity: 60,
    amenities: ['Wifi 5G', 'Áo phao cá nhân', 'Kính vòm toàn cảnh'],
    description: 'Kính vòm toàn cảnh chạm trần, boong thượng ngắm view.',
  },
  {
    id: 3,
    name: 'Tàu River Cruiser',
    type: 'cruiser',
    capacity: 50,
    amenities: ['Wifi 5G', 'Áo phao cá nhân', 'Salon cao cấp'],
    description: 'Phong cách du thuyền boutique, ghế bọc nệm salon êm ái.',
  },
];

export function getVesselByType(type: Vessel['type']) {
  return VESSELS.find((v) => v.type === type)!;
}
