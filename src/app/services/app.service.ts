import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  
  public sendPostRequest(url, body): any {
    console.log('------------------->', url, body);
    return this.http.post(url, body);
  }

  public sendGetRequest(url): any {
    console.log('------------------->', url);
    return this.http.get(url);
  }
  public sendDeleteRequest(url): any{
    console.log('------------------->', url);
    return this.http.delete(url);

  }

  public sendPutRequest(url, body): any {
    console.log('------------------->', url, body);
    return this.http.put(url, body);
  }
  
}
