import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class ServerService {
  dbUrl = "https://ng-http-72698.firebaseio.com/servers.json";
  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    //return this.http.post(this.dbUrl, servers, {headers: headers});
    return this.http.put(this.dbUrl, servers, { headers: headers });
  }

  getServers() {
    return this.http.get(this.dbUrl).map((res: Response) => {
      const data = res.json();
      return data;
    })
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong');
      });
  }

  getAppName() {
    return this.http.get('https://ng-http-72698.firebaseio.com/AppName.json')
    .map((res : Response) => {
      return res.json();
    });
  }

}
