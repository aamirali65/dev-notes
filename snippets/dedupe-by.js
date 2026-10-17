export const dedupeBy = (list, keyOf) =>
  [...new Map(list.map((item) => [keyOf(item), item])).values()];

// used in the notes above

// used in the notes above

// used in the notes above

// guard the empty case

// used in the notes above

// guard the empty case

// guard the empty case

// guard the empty case
