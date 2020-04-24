import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
  export class HomeService {
  
    constructor(private httpClient:HttpClient) { }
  
    GetHomeData():Observable <any>
    {
     return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=entertainment&apiKey=6bb96fa2b57946c3b3ca0384e481c3b5')
    }
  }