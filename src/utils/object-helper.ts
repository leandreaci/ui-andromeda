import rfdc from 'rfdc'

class ObjectHelper {
  merge (obj1: any, obj2: any) {
    for (const p in obj2) {
      try {
        obj1[p] = obj2[p].constructor === Object ? this.merge(obj1[p], obj2[p]) : obj1[p] = obj2[p]
      } catch (e) {
        obj1[p] = obj2[p]
      }
    }

    return obj1
  }

  isObject (value: any): boolean {
    const type = typeof value
    return value != null && (type === 'object' || type === 'function')
  }

  clone (value: object): object {
    return rfdc(value)
  }

  destruct (obj: object, ...keys: any): object {
    // @ts-ignore
    return keys.reduce((a: object, c: string) => ({ ...a, ...(obj[c] && { [c]: obj[c] }) }), {})
  }
}

export default new ObjectHelper()
