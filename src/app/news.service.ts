import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '22fe57d8ed6049c2b4cdb06829dee5f8';
  private chinaUrl = `https://newsapi.org/v2/top-headlines?country=cn&apiKey=${this.apiKey}`;
  private russiaUrl = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${this.apiKey}`;
  private indiaUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getNews(): Observable<any[]> {
    return forkJoin([
      this.http.get<any>(this.chinaUrl),
      this.http.get<any>(this.russiaUrl),
      this.http.get<any>(this.indiaUrl)
    ]);
  }
}
