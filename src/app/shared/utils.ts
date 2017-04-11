/**
 * Created by Skander Khedhiri on 05/04/2017.
 */
export class Utils {
  static check(x: any): boolean {
    if (x === null || x === 'null' || x === '') {
      return false;
    } else if (typeof x === 'undefined') {
      return false;
    } else return true;
  }

  static getPercentage(initial: number, final: number) {
    return (final / initial) * 100;
  }

  static convertDate(inputFormat: any) {
    function pad(s: any) {
      return (s < 10) ? '0' + s : s;
    }

    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

}
