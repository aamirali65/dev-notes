export const omit = (object, keys) =>
  Object.fromEntries(Object.entries(object).filter(([key]) => !keys.includes(key)));

// keep it pure
