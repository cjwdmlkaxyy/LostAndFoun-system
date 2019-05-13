import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})

export class CheckValueAndStatusService {
  constructor(private nzMessage: NzMessageService) {}
  checkRes(val) {
    if (val === '999999') {
      this.nzMessage.error('系统错误，请稍后再试');
      return false;
    }
  }

  error() {
    this.nzMessage.error('服务器错误，请稍等');
  }

  success() {
    this.nzMessage.success('操作成功');
  }
}
