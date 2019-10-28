import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(value: string, limit: number = 10): any {
    return (value.length > limit) ? value.substr(0, limit) + ' ...seguir leyendo' : value;
  }

}
