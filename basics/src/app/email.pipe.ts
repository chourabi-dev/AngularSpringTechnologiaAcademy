import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    // tchourabi@gmail.com

    let parts = value.split('@');

    console.log(parts);

    let res = parts[0].substr(0,3)+'****************@'+parts[1]; 
    return res;
  }

}
