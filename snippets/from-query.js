export const fromQuery = (search) =>
  Object.fromEntries(new URLSearchParams(search));
