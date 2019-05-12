import { Injectable } from "@angular/core";
import { NzModalService } from "ng-zorro-antd";
import { NzMessageService } from "ng-zorro-antd";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NzModalComfrimService {
  constructor(private nzModal: NzModalService,
              private nzMessage: NzMessageService) {}

  deleteComfrim() {
    this.nzModal.confirm({
      nzTitle: '<b>确定要删除这条数据吗？</b>',
      // nzContent: '<b style="color: red;">提示信息</b>',
      nzWidth: '330',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('ok')
        return true;
      },
      nzCancelText: '取消',
      nzOnCancel: () => {
        console.log('no');
        return false;
      }
    });
  }

  alterInfos() {
    this.nzMessage.info('请选择要删除的数据');
  }
}
