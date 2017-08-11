import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false//pure true is means pipe re-run every time anything changes in component. by default pure is true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propName:string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for(const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
