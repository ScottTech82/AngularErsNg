import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string = "", asc: boolean = true): any[] {

    //creating fn to take a array, b array. Then creating 2 variables to check the typeof each column
    //whether they are number or string column. If string, changing to string and lowercase.
    const sortFn = (a: any, b: any): number => {
      if(a[column] === null)
        a[column] = "";
      if(b[column] === null)
        b[column] = "";
      let x = typeof a[column] === "number" ? a[column] : a[column].toString().toLowerCase();
      let y = typeof b[column] === "number" ? b[column] : b[column].toString().toLowerCase();
      if(x === y) return 0;
      if(asc)
        return (x > y) ? 1 : -1;
      else
        return (x > y) ? -1 : 1;
    }

    return arr.sort(sortFn);
  }

}
