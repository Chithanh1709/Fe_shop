import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string):Observable<any> {
    const body ={
      "email" : email,
      "password" : password,
    }
    return this.http.post(environment.apiLogin, { email, password });
  }
  regis(name : string ,email: string, password: string ):Observable<any> {
    const body ={
      "name" : name,
      "email" : email,
      "password" : password,
  
    }
    return this.http.post(environment.apiRegist, {name , email, password });
  }
  recover(email: string, password: string):Observable<any> {
    const body ={
      "email" : email,
      "password" : password
    }
    return this.http.post(environment.apiRecover, { email, password });
  }
}
