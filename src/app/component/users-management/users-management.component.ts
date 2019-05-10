import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uers-manage-ment',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  test: FormGroup;

  constructor() { }

  listOfData = [1,2];
  searchLayer = false;

  ngOnInit() {
  }

  openSearchLayer() {
    this.searchLayer = true;
  }

  closeSearch() {
    this.searchLayer = false;
  }

}
