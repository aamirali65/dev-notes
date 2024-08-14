export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// guard the empty case

// used in the notes above

// guard the empty case

// guard the empty case
