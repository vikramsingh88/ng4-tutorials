import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, limit : number): any {
    if(value.length > limit) {
      return value.substr(0, limit)+' ...';
    }
    return value;
  }

}
