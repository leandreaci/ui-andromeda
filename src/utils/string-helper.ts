class StringHelper {
  toSlug (title: string): string {
    return title.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[ _]/g, '-')
  }

  capitalize (string: string = ''): string {
    const str = string.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  toCamelCase (string: string = ''): string {
    return string.replace(/\b-([a-z])/g, (_, char) => char.toUpperCase())
  }

  toKebabCase = (string: string): string => {
    return string.split('').map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter
    }).join('')
  }

  mask (value: string|number, pattern: string): string {
    let i = 0
    const v = value.toString()

    return pattern
      .replace(/#/g, () => v[i++] || '')
  }
}

export default new StringHelper()
