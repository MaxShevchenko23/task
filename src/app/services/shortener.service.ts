import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  private baseUrl: string = "https://localhost:7098"

  constructor(private http: HttpClient) { }

  shortenLink(sourceLink: string): Observable<HttpResponse<any>>
  {
      return this.http.post<any>(this.baseUrl + '/shortener/shorten?source=' + sourceLink,
                                  null, { observe: 'response' });
  }


}
