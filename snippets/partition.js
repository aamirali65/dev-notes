export const partition = (list, predicate) =>
  list.reduce(([yes, no], item) => (predicate(item) ? [[...yes, item], no] : [yes, [...no, item]]), [[], []]);

// guard the empty case
