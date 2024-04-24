import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any[], searchKey: string): any[] {

    const result:any=[]

    if(!value || !searchKey){ return value }

    value.forEach((item:any)=>{
      if(item.posttitle.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }

    })

    return  result;
  }

}
