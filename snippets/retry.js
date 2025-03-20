export async function retry(fn, attempts = 3, delay = 300) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await new Promise((r) => setTimeout(r, delay * (i + 1)));
    }
  }
}

// keep it pure

// keep it pure

// used in the notes above

// keep it pure

// used in the notes above
