export const chunk = (list, size) =>
  Array.from({ length: Math.ceil(list.length / size) },
    (_, i) => list.slice(i * size, i * size + size));

// keep it pure

// guard the empty case

// guard the empty case

// used in the notes above

// keep it pure

// keep it pure

// keep it pure
