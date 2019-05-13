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
  pageConfig: any;
  searchCondition: any;
  renderData = [];
  deleteArr = [];
  addOrSearch = ''

  ngOnInit() {
    this.searchForm = this.fb.group({
      linkName: [null],
      linkUrl: [null],
      description: [null]
    });
    this.resetPageConfig();
    this.clearSearchCondition();
    this.getData();
  }

  clearSearchCondition() {
    // clear search form value
    /*for (let controlsKey in this.searchForm.controls) {
      this.searchForm.controls[controlsKey].setValue(null);
    }*/
    this.searchCondition = {
      name: '',
      url: '',
      description: '',
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
    this.httpRequest.getLinks(this.searchCondition).subscribe((res: any) => {
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

  openSearchLayer(flag: string) {
    if(flag === 'add') {
      this.addOrSearch = '新增';
    } else {
      this.addOrSearch = '查询';
    }
    this.clearSearchCondition();
    this.searchLayer = true;
  }

  confirmSearchOrAdd() {
    if(this.addOrSearch === '新增') {
      this.addLink();
    } else {
      this.searchLayer = false;
      this.getData();
    }
  }

  closeSearch() {
    this.searchLayer = false;
  }

  changeData(val: number, flag: string) {
    if (flag === 'index') {
      this.searchCondition.pageNo = val;
    } else {
      this.searchCondition.pageSize = val;
    }
    this.getData();
  }

  deleteLink(id) {
    if(id !== '') {
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
        this.httpRequest.deleteLink(this.deleteArr).subscribe((res: any) => {
          if(!this.checkValAndStatus.checkRes(res.code)) {
            this.getData();
            this.checkValAndStatus.success();
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
        $(':checkbox').each(function (i, e) {
          $(e).prop('checked', false);
        })
        this.deleteArr = [];
      }
    })
  }
  addLink() {
    this.httpRequest.addLink(this.searchCondition).subscribe((res: any) => {
      if (!this.checkValAndStatus.checkRes(res.code)) {
        this.clearSearchCondition();
        this.getData();
        this.checkValAndStatus.success();
        this.searchLayer = false;
      }
    }, (err: any) => {
      this.checkValAndStatus.error();
    })
  }

  refresh() {
    this.clearSearchCondition();
    this.getData();
  }
}
