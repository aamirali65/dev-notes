export const groupBy = (list, keyOf) =>
  list.reduce((acc, item) => {
    const key = keyOf(item);
    (acc[key] ??= []).push(item);
    return acc;
  }, {});

// keep it pure

// guard the empty case

// guard the empty case

// guard the empty case

// guard the empty case
