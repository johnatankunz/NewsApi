import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsApiService {

    static RESOURCE_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
    static API_KEY = '5e28f9fc7bde49aca9062519d82b4791';

    constructor(private http: HttpClient) { }

    list(): Observable<any> {
        return this.http.get(NewsApiService.RESOURCE_URL + NewsApiService.API_KEY);
    }
}
