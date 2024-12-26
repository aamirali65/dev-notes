export function deepGet(source, path, fallback) {
  const value = path.split('.').reduce((acc, key) => acc?.[key], source);
  return value === undefined ? fallback : value;
}

// used in the notes above

// keep it pure

// guard the empty case

// keep it pure

// keep it pure

// keep it pure

// keep it pure

// keep it pure
