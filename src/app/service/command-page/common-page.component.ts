import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-page',
  template: `
    <nz-pagination [nzPageIndex]="pageIndex" [nzTotal]="totalNum == 0 ? 1 : totalNum" nzShowSizeChanger
                   [nzPageSize]="pageSize" (nzPageIndexChange)="changeData($event)" 
                   (nzPageSizeChange)="changePageSize($event)">
    </nz-pagination>
  `,
  styles: [`
    .pagination > li > a, .pagination > li > span {
      float:initial;
    }
  `]
})
export class CommonPageComponent implements OnInit {

  constructor() { }

  @Input() totalNum: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;

  @Output() currentIndex = new EventEmitter<number>();
  @Output() currentPageSize = new EventEmitter<number>()


  // pageIndex = 1;

  ngOnInit() {
  }

  changeData(e) {
    this.pageIndex = e;
    this.currentIndex.emit(e);
  }
  changePageSize(e) {
    console.log(e);
    // this.currentPageSize = e;
    this.currentPageSize.emit(e);
  }
}
