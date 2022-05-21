class DateHelper {
  private isBr (date: string): boolean { // dd/mm/yyyy or dd-mm-yyyy
    return /^([0-3]{1}\d{1})[-/]([0-1]{1}\d{1})[-/](\d{4})$/.test(date)
  }

  private isUs (date: string): boolean { // yyyy/mm/dd yyyy-mm-dd
    return /^(\d{4})[-/](\d{2})[-/](\d{2})$/.test(date)
  }

  private isTime (time: string): boolean { // 00:00:00
    return /^\d{2}:\d{2}:\d{2}$/.test(time)
  }

  private getTime (time: string): string {
    return this.isTime(time) ? time : '00:00:00'
  }

  private brToDate (date: string): Date {
    const formatDate = date.slice(0, 10).replace(/-/g, '/')
    const formatDateUs = formatDate.split('/').reverse().join('-')
    return new Date(`${formatDateUs} ${this.getTime(date.slice(11, 19))}`)
  }

  private usToDate (date: string): Date {
    const formatDate = date.slice(0, 10).replace(/\//g, '-')
    return new Date(`${formatDate} ${this.getTime(date.slice(11, 19))}`)
  }

  private validateDate (date: Date): Date|null {
    return (date).toString().toLocaleLowerCase() !== 'invalid date' ? date : null
  }

  stringToDate (date?: string|null): Date|null {
    if (!date) return null

    switch (true) {
      case this.isBr(date.slice(0, 10)): return this.validateDate(this.brToDate(date))
      case this.isUs(date.slice(0, 10)): return this.validateDate(this.usToDate(date))
      default: return null
    }
  }

  dateToString (date?: Date|null): string|null {
    if (!date) return null

    try {
      return date.toLocaleString()
    } catch (e) {
      return null
    }
  }
}

export default new DateHelper()
