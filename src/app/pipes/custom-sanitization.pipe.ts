import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'customSanitization'
})
export class CustomSanitizationPipe implements PipeTransform {

  constructor(private dom:DomSanitizer){
  }

  transform(value: any): any {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
