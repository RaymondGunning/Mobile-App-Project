import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable <any>
  {
   return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=13fb6e18b9a5a1933cf0bf491cf07c46&language=en-US&page=1')
  }
}
