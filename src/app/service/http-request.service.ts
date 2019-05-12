import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService{
    constructor(private http: HttpClient){}

    urlFront = 'http://47.102.139.16:8083';
    // urlFont = 'http://192.168.2.57:8083';
    urlGoods = 'http://47.102.139.16:8082'

    /*
    * login
    * */
    login(val): Observable<any>{
      return this.http.post(this.urlFront + '/back/login',val);
    }

    /*
    * dashboard
    * */
    dashboard(): Observable<any>{
      return this.http.get(this.urlFront + '/home/loginCount');
    }

  /*
  * search goods
  * */
  searchGoods(data): Observable<any> {
    return this.http.post(this.urlGoods + '/goods/getGoodsInfo', data);
  }
  /*
  * delete goods by id
  * */
  deleteGoods(data): Observable<any> {
    return this.http.post( this.urlGoods + '/goods/delGoods', data);
  }
  /*
  * get users
  * */
  getUsers(data): Observable<any> {
    return this.http.post(this.urlFront + '/user/getUserInfo', data);
  }
  /*
  * delete user
  * */
  deleteUsers(data): Observable<any> {
    return this.http.post(this.urlFront + '/user/delUser', {id: data});
  }
  /*
  * get link
  * */
  getLinks(data): Observable<any> {
    return this.http.post(this.urlFront + '/connection/getConnection', data);
  }
  /*
  * add link
  * */
  addLink(data): Observable<any> {
    return this.http.post(this.urlFront + '/connection/insert', data);
  }
  /*
  * delete link
  * */
  deleteLink(data): Observable<any> {
    return this.http.post(this.urlFront + '/connection/delConnection', data);
  }
}
