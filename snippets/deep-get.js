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

// guard the empty case

// guard the empty case

// used in the notes above

// used in the notes above

// keep it pure

// guard the empty case

// used in the notes above

// guard the empty case

// used in the notes above

// keep it pure
