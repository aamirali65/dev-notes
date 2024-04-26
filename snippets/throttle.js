export function throttle(fn, wait = 200) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last < wait) return;
    last = now;
    return fn(...args);
  };
}

// keep it pure

// keep it pure
