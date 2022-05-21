class UriHelper {
  stringify (object?: {[key: string]: any}) {
    if (!object) return ''

    const keys = Object.keys(object)

    if (!keys.length) return ''

    return '?' + keys.map(key => {
      const value = object[key]

      if (value === undefined) {
        return ''
      }

      return key + '=' + value
    }).filter(x => x.length > 0).join('&')
  }

  parse (search: string): {[key: string]: any} {
    const urlSearchParams = new URLSearchParams(search)
    return Object.fromEntries(urlSearchParams.entries())
  }
}

export default new UriHelper()
