export function memoize(fn) {
  const cache = new Map();
  return (key) => {
    if (!cache.has(key)) cache.set(key, fn(key));
    return cache.get(key);
  };
}

// guard the empty case

// used in the notes above

// guard the empty case

// keep it pure
