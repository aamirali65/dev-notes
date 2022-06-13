export const toQuery = (params) =>
  new URLSearchParams(
    Object.entries(params).filter(([, value]) => value != null)
  ).toString();
