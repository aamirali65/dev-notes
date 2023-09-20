export const pick = (object, keys) =>
  Object.fromEntries(keys.filter((key) => key in object).map((key) => [key, object[key]]));

// keep it pure

// keep it pure
