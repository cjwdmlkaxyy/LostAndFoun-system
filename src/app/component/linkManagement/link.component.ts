import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from "../../service/http-request.service";
import { CheckValueAndStatusService } from "../../service/check-value-and-status.service";
import { NzModalComfrimService } from "../../service/nzModal-comfrim.service";
import { NzModalService } from "ng-zorro-antd";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss', '../users-management/users-management.component.scss']
})
export class LinkComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpRequest: HttpRequestService,
              private checkValAndStatus: CheckValueAndStatusService,
              private nzModalComfirm: NzModalComfrimService,
              private nzModal: NzModalService) {}

  searchLayer = false;
  userDetailsLayer = false;
  pageConfig: any;
  searchCondition: any;
  renderData = [];
  deleteArr = [];

  ngOnInit() {
    this.searchForm = this.fb.group({
      loginAccount: [null],
      createTime: [null],
      loginTime: [null]
    });
    this.resetPageConfig();
    this.clearSearchCondition();
    this.getData();
  }

  clearSearchCondition() {
    // clear search form value
    for (let controlsKey in this.searchForm.controls) {
      this.searchForm.controls[controlsKey].setValue(null);
    }
    this.searchCondition = {
      id: null,
      loginAccount: this.searchForm.value.loginAccount,
      createTime: this.searchForm.value.createTime,
      loginTime: this.searchForm.value.loginTime,
      pageNo: this.pageConfig.pageNo,
      pageSize: this.pageConfig.pageSize
    }
  }
  resetPageConfig() {
    this.pageConfig = {
      pageNo: 1,
      pageSize: 10,
      totalNum: null
    }
  }

  getData() {
    console.log(this.searchCondition);
    this.httpRequest.getUsers(this.searchCondition).subscribe((res: any) => {
      if(!this.checkValAndStatus.checkRes(res.code)) {
        const data = JSON.parse(res.data.data);
        console.log(res);
        this.renderData = data;
        this.pageConfig.totalNum = res.data.recordCount;
        this.pageConfig.pageNo = parseInt(res.data.currentPage);
      }
    }, (err: any) => {
      console.log(err);
      this.checkValAndStatus.error();
    });
  }

  openSearchLayer(id: number) {
    this.clearSearchCondition();
    this.searchCondition.id = id;
    this.searchLayer = true;
  }

  confirmSearch() {
    console.log(this.searchCondition);
    this.searchCondition.loginAccount = this.searchForm.value.loginAccount;
    this.searchCondition.createTime = this.searchForm.value.createTime;
    this.searchCondition.loginTime = this.searchForm.value.loginTime;
    this.searchLayer = false;
    this.getData();
  }

  closeSearch() {
    this.searchLayer = false;
  }

  openUsersLayer(id: number) {
    this.userDetailsLayer = true;
    this.clearSearchCondition();
    this.searchCondition.id = id;
    this.getData();
  }
  closeUserDetails() {
    this.userDetailsLayer = false;
  }

  changeData(val: number, flag: string) {
    console.log(val, flag);
    if (flag === 'index') {
      this.searchCondition.pageNo = val;
    } else {
      this.searchCondition.pageSize = val;
    }
    this.getData();
  }

  deleteUser(id) {
    if(id) {
      this.deleteArr.push(id);
    } else {
      const _this = this;
      $(':checkbox').each(function (i, e) {
        if ($(e).prop('checked')) {
          _this.deleteArr.push($(e).val());
        }
      })
    }
    if(this.deleteArr.length === 0) {
      this.nzModalComfirm.alterInfos();
      return;
    }
    this.nzModal.confirm({
      nzTitle: '<b>确定要删除这条数据吗？</b>',
      nzWidth: '330',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.httpRequest.deleteUsers(this.deleteArr).subscribe((res: any) => {
          if(!this.checkValAndStatus.checkRes(res.code)) {
            this.getData();
            this.deleteArr = [];
          }
        }, (err: any) => {
          console.log(err);
          this.checkValAndStatus.error();
        })
      },
      nzCancelText: '取消',
      nzOnCancel: () => {
        console.log('no');
      }
    })
  }

  refresh() {
    this.clearSearchCondition();
    this.getData();
  }
}
