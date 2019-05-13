import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestService } from "../../../service/http-request.service";
import { CheckValueAndStatusService } from "../../../service/check-value-and-status.service";
import { NzModalComfrimService } from "../../../service/nzModal-comfrim.service";
import { NzModalService } from "ng-zorro-antd";
import { goodsType } from "../../../service/public-data-const";

@Component({
  selector: 'app-lost-sth',
  templateUrl: './lost-sth.component.html',
  styleUrls: ['./lost-sth.component.scss', '../../users-management/users-management.component.scss']
})
export class LostSthComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpRequest: HttpRequestService,
              private checkValAndStatus: CheckValueAndStatusService,
              private nzModalComfirm: NzModalComfrimService,
              private nzModal: NzModalService) {}

  searchLayer = false;
  goodsDetailsLayer = false;
  pageConfig: any;
  searchCondition: any;
  renderData = [];
  deleteArr = [];
  goodsTypeArr = goodsType;
  detailsList = [];

  ngOnInit() {
    this.searchForm = this.fb.group({
      loginAccount: [null],
      startTime: [null],
      endTime: [null],
      goodsType: ['']
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
    this.searchCondition  = {
      fromTime: this.searchForm.value.startTime, // startTime
      toTime: this.searchForm.value.endTime,  // endTime
      typeOfGoods: this.searchForm.value.goodsType,
      pageNo: this.pageConfig.pageNo,
      pageSize: this.pageConfig.pageSize,
      id: '',  // 物品id
      // province: '',
      // district: '',
      // city: '',
      goodsWay: 1 // 寻物
    };
  }
  resetPageConfig() {
    this.pageConfig = {
      pageNo: 1,
      pageSize: 10,
      totalNum: null
    }
  }

  getData() {
    /*封装数据*/
    if(this.searchForm.value.startTime) {
      const date = new Date(this.searchForm.value.startTime);
      const time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
      this.searchCondition.fromTime = time.getTime();
    }
    if(this.searchForm.value.endTime){
      const date = new Date(this.searchForm.value.endTime);
      const time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
      this.searchCondition.toTime = time.getTime();
    }
    this.searchCondition.typeOfGoods = this.searchForm.value.goodsType;
    this.httpRequest.searchGoods(this.searchCondition).subscribe((res: any) => {
      if(!this.checkValAndStatus.checkRes(res.code)) {
        const data = JSON.parse(res.data.goods);
        console.log(data);
        if(this.searchCondition.id) {
          this.detailsList = data;
        } else {
          this.renderData = data;
          this.pageConfig.totalNum = res.data.recordCount;
          this.pageConfig.pageNo = parseInt(res.data.currentPage);
        }
      }
    }, (err: any) => {
      console.log(err);
      this.checkValAndStatus.error();
    });
  }

  openSearchLayer(id: number) {
    this.clearSearchCondition();
    this.searchLayer = true;
  }

  confirmSearch() {
    this.searchLayer = false;
    this.getData();
  }

  closeSearch() {
    this.searchLayer = false;
  }

  openDetailsLayer(id: number) {
    this.goodsDetailsLayer = true;
    this.clearSearchCondition();
    this.searchCondition.id = id;
    this.getData();
  }
  closeUserDetails() {
    this.goodsDetailsLayer = false;
    this.searchCondition.id = '';
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

  deleteGoods(id) {
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
        this.httpRequest.deleteGoods(this.deleteArr).subscribe((res: any) => {
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
        this.deleteArr = [];
        console.log('no');
      }
    })
  }

  refresh() {
    this.clearSearchCondition();
    this.getData();
  }
}

