import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let newCollection:any = {};
    
    value.forEach((element:any) => {
      if(!newCollection[element.department]) {
        newCollection[element.department] = [];
      }
      newCollection[element.department].push(element);
    });
    console.log(newCollection);

    let finalData = [];
    for(let key in newCollection) {
      finalData.push({department: key, users: newCollection[key]})
    }
    
    console.log(finalData);
    
    return finalData;
  }

}
