import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss', '../../publicSource/style/publicStyle.scss']
})
export class SlideshowComponent implements OnInit {

  endIndex: number;
  startIndex: number;
  lineHeight: number;
  imgSrc: any;
  isShow: boolean;

  listOfData = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key    : '4',
      name   : '4',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key    : '5',
      name   : '5',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key    : '6',
      name   : '6',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private sanizter: DomSanitizer) { }

  ngOnInit() {
    this.imgSrc = null;
    this.isShow = false;
  }

  /*drag:拖动
  * start drag
  * */
  drag(e, index) {
    this.startIndex = e.currentTarget.id;
    e.dataTransfer.setData('text', index);
  }

  /*
  * dragging
  * */
  drop(e, index) {
    console.log(e);
    e.preventDefault();
    let nodes = $('tbody tr').eq(this.endIndex);
    let currentNode = $('tbody tr').eq(this.startIndex);
    if (this.startIndex > this.endIndex) {
      nodes.before(currentNode);
    } else {
      nodes.after(currentNode);
    }
    for(let i=0;i<$('tbody tr').length;i++){
      $('tbody tr').eq(i).prop('id',i);
    }
  }
  /*
  * end drag
  * */
  allowDrop(e, index) {
    this.endIndex = e.currentTarget.id;
    e.preventDefault();
  }

  /*
  * upload picture
  * */
  uploadImg() {
    $('#uploadPicture').click();
  }

  upload(e) {
    console.log(e);
    let src = e.srcElement.files[0];
    console.log(src);
    let test11 = window.URL.createObjectURL(src);
    console.log(test11);
    this.imgSrc = this.sanizter.bypassSecurityTrustUrl(test11);
    console.log(this.imgSrc);
  }

  /*
  * add data
  * */
  add() {
    if (this.listOfData.length > 9) {
      this.isShow = true;
      this.openTooltips();
      setTimeout(this.closeTooltips, 3000);
    } else {
      this.listOfData.push({
        key    : '',
        name   : '',
        age    : null,
        address: ''
      });
    }
  }

  /*
  * delete item
  * */
  deleteItem(index) {
    console.log(index);
    this.listOfData.splice(index, 1);
    this.closeTooltips();
  }

  /*
  * open or close the tooltips
  * */
  openTooltips() {
    $('.prompts').fadeIn(300);
  }
  closeTooltips() {
    $('.prompts').fadeOut(300);
  }
}
