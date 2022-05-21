class ValidationsHelper {
  isUrl (uri: string): boolean {
    const regex = /^https?:\/\//
    return regex.test(uri)
  }
}

export default new ValidationsHelper()
