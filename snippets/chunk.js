export const chunk = (list, size) =>
  Array.from({ length: Math.ceil(list.length / size) },
    (_, i) => list.slice(i * size, i * size + size));
