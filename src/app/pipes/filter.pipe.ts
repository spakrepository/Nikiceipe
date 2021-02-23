import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm:string): any[] {
    
    if(!value || !searchTerm){
      return value;
    }
    else
    {
      let result = value.filter(x => x.text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      return result;
    }
  }

}
