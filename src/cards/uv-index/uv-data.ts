import type { HassEntity } from '../../types/home-assistant';

export const UV_LEVELS = [
  { level: 'low', range: '0–2', color: '#289500' },
  { level: 'moderate', range: '3–5', color: '#f7e400' },
  { level: 'high', range: '6–7', color: '#f85900' },
  { level: 'very_high', range: '8–10', color: '#d8001d' },
  { level: 'extreme', range: '11+', color: '#6b49c8' },
] as const;

export function parseUVIndex(state: unknown): number | undefined {
  if (
    typeof state !== 'string' ||
    !/^\+?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(state.trim())
  )
    return undefined;
  const value = Number(state);
  return Number.isFinite(value) ? value : undefined;
}

export function uvLevel(value: number): (typeof UV_LEVELS)[number] {
  if (!Number.isFinite(value) || value < 0) throw new Error(`Invalid UV index: ${value}`);
  return UV_LEVELS[value < 3 ? 0 : value < 6 ? 1 : value < 8 ? 2 : value < 11 ? 3 : 4];
}

export function uvStatus(
  entity: HassEntity | undefined
): 'available' | 'missing' | 'unavailable' | 'invalid' {
  if (!entity) return 'missing';
  if (entity.state === 'unknown' || entity.state === 'unavailable') return 'unavailable';
  return parseUVIndex(entity.state) === undefined ? 'invalid' : 'available';
}
