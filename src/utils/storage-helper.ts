class StorageHelper {
  get (key: string, parse: boolean = false): any {
    if (!parse) return localStorage.getItem(key)
    return JSON.parse(this.get(key))
  }

  set (key: string, value: any, stringify: boolean = false): void {
    if (!stringify) localStorage.setItem(key, value)
    else this.set(key, JSON.stringify(value))
  }

  clear () {
    localStorage.clear()
  }
}

export default new StorageHelper()
