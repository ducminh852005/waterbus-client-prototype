import type { Station } from '../types';

export const STATIONS: Station[] = [
  { code: 'BD', name: 'Bến Bạch Đằng', shortName: 'Bạch Đằng', area: 'Bến Nghé, Quận 1' },
  { code: 'BS', name: 'Bến Ba Son', shortName: 'Ba Son', area: 'Vinhomes Golden River, Quận 1' },
  { code: 'BA', name: 'Bến Bình An', shortName: 'Bình An', area: 'Trần Não, TP. Thủ Đức' },
  { code: 'TD', name: 'Bến Thảo Điền', shortName: 'Thảo Điền', area: 'Nguyễn Văn Hưởng, TP. Thủ Đức' },
  { code: 'LD', name: 'Bến Linh Đông', shortName: 'Linh Đông', area: 'Kha Vạn Cân, TP. Thủ Đức' },
];

export function getStationByCode(code: string) {
  return STATIONS.find((s) => s.code === code);
}
