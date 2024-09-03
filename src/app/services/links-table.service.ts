import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinksTableService {
  
  private baseUrl: String = "https://localhost:7098"
  
  token: string = "";

  constructor(private http: HttpClient, 
    private cookieService: CookieService,
    private router: Router) {

      this.token = this.cookieService.get('token');
     }


     getLinks(): Observable<HttpResponse<any>> {
      
      if (!this.token){
        this.router.navigate(['/login'])
      }


      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
      });
    
      return this.http.get<any>(this.baseUrl + '/shortener/all', { 
        headers: headers,
        observe: 'response'
      });
    }
    
}
