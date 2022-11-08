export const dedupeBy = (list, keyOf) =>
  [...new Map(list.map((item) => [keyOf(item), item])).values()];

// used in the notes above
