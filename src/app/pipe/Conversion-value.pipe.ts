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

@Pipe({
  name: 'GoodsStatus'
})
export class GoodsStatus implements PipeTransform {
  transform(val: any, flag: string) {
    if (flag === 'found') {
      if (val === 0) {
        return '待领取';
      } else if (val === 1) {
        return '已被领';
      } else if (val === 2) {
        return '已失效';
      }
    } else {
      if (val === 0) {
        return '寻找中';
      } else if (val === 1) {
        return '已找到';
      } else if (val === 2) {
        return '已失效';
      }
    }
  }
}
