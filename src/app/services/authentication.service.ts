import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private baseUrl: String = "https://localhost:7098"

  constructor(private http: HttpClient) { }

  register(email: string, password:string): Observable<HttpResponse<any>>{
    return this.http.post<any>(this.baseUrl + '/user/register',
      { email: email, password:password },
      { observe: 'response' });
  }

  authenticate(email: string, password: string): Observable<HttpResponse<any>>{
    return this.http.post<any>(this.baseUrl + '/user/auth',
      { email: email, password:password },
      { observe: 'response' });
  }

}
