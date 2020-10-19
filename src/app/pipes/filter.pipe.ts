import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,arg: any): unknown {
    if (value !== undefined){
      console.log(arg);
      const resultPost = [];
      for (const item of value){
        if (item.author.toUpperCase().indexOf(arg.toUpperCase()) > -1){
          resultPost.push(item);
        }
      }
      return resultPost;
    }
    return null;

  }

}
