export function debounce(fn, wait = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

// used in the notes above

// guard the empty case

// used in the notes above

// used in the notes above

// used in the notes above

// used in the notes above

// guard the empty case

// guard the empty case

// guard the empty case
