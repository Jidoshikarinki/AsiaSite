import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  newsData: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(([chinaData, russiaData, indiaData]) => {
      this.newsData.push(...chinaData.articles, ...russiaData.articles, ...indiaData.articles);
    });
  }
}