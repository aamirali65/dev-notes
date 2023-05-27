export const toQuery = (params) =>
  new URLSearchParams(
    Object.entries(params).filter(([, value]) => value != null)
  ).toString();

// keep it pure

// guard the empty case

// guard the empty case

// keep it pure

// keep it pure
