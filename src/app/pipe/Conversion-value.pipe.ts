import { Pipe, PipeTransform } from '@angular/core';
import { goodsType} from "../service/public-data-const";

@Pipe({
  name: 'conversionValue'
})

export class ConversionValuePipe implements PipeTransform {

  constructor() { }



  transform(value: any): any {
    for (let item of goodsType) {
      if (value === item.key) {
          return item.val;
      }
    }
  }
}
