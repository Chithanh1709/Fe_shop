import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiKey = 'e837128ee3cc897806752f6bab1bbc7d';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password,
    }
    return this.http.post(environment.apiLogin, { email, password });
  }

  regis(fullName: string, email: string, password: string): Observable<any> {
    const body = {
      "name": fullName,
      "email": email,
      "password": password,

    }
    return this.http.post(environment.apiRegist, { fullName, email, password });
  }

  recover(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post(environment.apiRecover, { email, password });
  }

  getMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=vi-VN&page=${page}`);
  }
}
