import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uers-manage-ment',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  constructor() { }

  listOfData = [1,2];

  ngOnInit() {
  }

}
