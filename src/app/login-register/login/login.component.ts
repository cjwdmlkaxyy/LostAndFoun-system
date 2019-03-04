import {Component, OnInit} from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bgBubbles = 20;
  bubbles: Array<any>;
  username: any;
  password: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bubbles = [];
    this.username = '';
    this.password = '';
    this.createBubbles(this.bgBubbles);
  }

  login() {
    this.router.navigate(['/Frame']);
  }

  createBubbles(size) {
    for (let i = 0; i < size; i++) {
      this.bubbles.push(i);
    }
  }
}
