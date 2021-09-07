import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { IDateProvider } from '@shared'

dayjs.extend(utc)

export class DateProvider implements IDateProvider {
  convertToUTC = (date: Date): string => dayjs(date).utc().local().format()

  compareInHours = (date1: Date, date2: Date = this.dateNow()): number =>
    dayjs(this.convertToUTC(date1)).diff(this.convertToUTC(date2), 'hours')

  dateNow = () => dayjs().toDate()
}
