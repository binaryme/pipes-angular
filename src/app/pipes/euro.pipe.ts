import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const euro =
      value.toLocaleString(undefined, { minimumFractionDigits: 2 }) + '€';
    return euro;
  }
}
