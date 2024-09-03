import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinkInfoService {

  private baseUrl: String = "https://localhost:7098"

  token: string = "";

  constructor(private http: HttpClient, 
    private cookieService: CookieService,
    private router: Router) {
      
      this.token = this.cookieService.get('token');

      
      
  }

  loadInfo(code: string){
    
    if (!this.token){
      this.router.navigate(['/login'])
    }
    
    return this.http.get<any>(this.baseUrl + '/shortener/'+ code +'/info',
      { observe: 'response' });
  }

}
