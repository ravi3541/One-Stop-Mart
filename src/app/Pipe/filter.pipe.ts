import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],category:string): unknown {
    const filteredArray=[];

    if (value.length===0 || category===''){
      return value;
    }

    for (const item of value){
      if (item['category']===category ){
        filteredArray.push(item);
      }
    }

    return filteredArray

  }

}
