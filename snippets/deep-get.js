export function deepGet(source, path, fallback) {
  const value = path.split('.').reduce((acc, key) => acc?.[key], source);
  return value === undefined ? fallback : value;
}
