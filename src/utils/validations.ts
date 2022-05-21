export function isNumberZero (value: number): boolean {
  return value === 0
}

export function isStringZero (value: string): boolean {
  return value === '0'
}

export function isZero (value: string|number): boolean {
  if (typeof value === 'string') return isStringZero(value)
  return isNumberZero(value)
}

export function isStringEmpty (value: string): boolean {
  return value === ''
}

export function isNullable (value: any): boolean {
  return !isZero(value) && value == null && isStringEmpty(value)
}
