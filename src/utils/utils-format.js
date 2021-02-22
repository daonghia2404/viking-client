export const autoCapitalize = (value) => {
  return value && value.replace(/\b\w/g, (l) => l.toUpperCase())
}
