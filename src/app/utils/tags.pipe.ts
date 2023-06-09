import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
})
export class TagsPipe implements PipeTransform {
  transform(value: string[]): string[] {
    return value
      .map((el) => {
        if (el.length > 8) {
          return el.slice(0, 8) + '...';
        }
        return el;
      })
  }
}
