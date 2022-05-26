export function classNames(classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function displayVariable(value: number, unit?: string) {
  const separator = unit === '%' ? '' : ' '
  if (unit) {
    return [value, separator, unit].join('')
  }
  return [value, separator].join('')
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
