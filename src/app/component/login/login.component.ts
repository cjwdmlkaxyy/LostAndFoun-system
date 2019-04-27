import {Component, OnInit} from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../service/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bgBubbles = 20;
  bubbles: Array<any>;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public httpRequest: HttpRequestService) {
  }

  loginInfos = {
    username: '',
    password: ''
  }
  checkLogin = false; // 检查用户名或密码是否正确

  ngOnInit() {
    this.bubbles = [];
    this.createBubbles(this.bgBubbles);
  }

  login() {
    this.httpRequest.login(this.loginInfos).subscribe( (res: any) => {
      console.log(res);
      if(res.code === '000000') {
        this.router.navigate(['/Frame']);
        this.checkLogin = false;
      } else if(res.code === '000009') { // 用户名或密码错误
        this.checkLogin = true;
      } else if(res.code === '000003') { // 密码不能少于6位
        this.checkLogin = true;
      }
    }, (err: any) => {
      console.log(err);
    })

  }

  createBubbles(size) {
    for (let i = 0; i < size; i++) {
      this.bubbles.push(i);
    }
  }
}
