class NumberHelper {
  float2Int (float: number): number {
    return Math.trunc(float)
  }

  sanitize (string: string): string {
    return string.replace(/\D/g, '')
  }

  currency (value: number = 0, locale: string = 'pt-br', format: string = 'BRL'): string {
    return Intl.NumberFormat(locale, {
      currency: format,
      style: 'currency'
    }).format(value)
  }

  currencySanitize (value: string): string|null {
    const sanitize = (Number(this.sanitize(value))).toString()
    const integer = sanitize.slice(0, -2)
    const decimal = sanitize.slice(-2)
    if (value.replace(/\D/g, '') === '00' || sanitize === '') return null
    if (decimal.length === 1) return `${integer}.0${decimal}`
    return `${integer}.${decimal}`
  }
}

export default new NumberHelper()
