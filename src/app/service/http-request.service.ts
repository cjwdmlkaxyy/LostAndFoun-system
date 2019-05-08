import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService{
    constructor(private http: HttpClient){}

    urlFont = 'http://47.102.139.16:8083';
    // urlFont = 'http://192.168.2.57:8083';

    /*
    * login
    * */
    login(val): Observable<any>{
      return this.http.post(this.urlFont + '/back/login',val);
    }

    /*
    * dashboard
    * */
    dashboard(): Observable<any>{
      return this.http.get(this.urlFont + '/home/loginCount');
    }
}
