import * as moment from 'moment';

export class GeneralHelpers {
  static formatDate(date: string): string {
    return moment(date, 'DD/MM/YYYY').locale('sw').format('dddd, MMMM DD');
  }
}
