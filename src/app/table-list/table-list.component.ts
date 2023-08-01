import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'app/service/news-api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  articles: any[] = new Array<any>();

  constructor(private NewsApiService: NewsApiService) { }

  ngOnInit() {

    this.NewsApiService.list().subscribe(
      (response) => {
        console.log(response);
        this.articles = response.articles;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
