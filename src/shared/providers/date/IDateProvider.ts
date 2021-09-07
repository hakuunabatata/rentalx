interface IDateProvider {
  compareInHours(date1: Date, date2?: Date): number
  convertToUTC(date: Date): string
  dateNow(): Date
}

export { IDateProvider }
