import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // drop(event: CdkDragDrop<string[]>): void {
  //   moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  //   console.log(2222222);
  // }
  allowDrop(e) {
    e.preventDefault();
  }
  drag(e) {
    e.dataTransfer.setData('application/x-moz-node', e.target);
  }

  drop(e, index) {
    console.log(index);
    e.preventDefault();
    let data = e.dataTransfer.getData('application/x-moz-node');
    // e.target.appendChild();
  }

}
