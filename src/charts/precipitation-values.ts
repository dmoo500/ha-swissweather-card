interface PrecipitationFields {
  precipitation?: unknown;
  rain?: unknown;
  precipitation_probability?: unknown;
  probability_of_precipitation?: unknown;
  pop?: unknown;
}

function finite(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

export function getPrecipitationValues(entry: PrecipitationFields): {
  amount: number | undefined;
  probability: number | undefined;
} {
  const amount = finite(entry.precipitation) ?? finite(entry.rain);
  const pop = finite(entry.pop);
  const probability =
    finite(entry.precipitation_probability) ??
    finite(entry.probability_of_precipitation) ??
    (pop === undefined ? undefined : pop <= 1 ? pop * 100 : pop);
  return {
    amount,
    probability: probability === undefined ? undefined : Math.max(0, Math.min(100, probability)),
  };
}
