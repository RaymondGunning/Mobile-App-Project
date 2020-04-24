import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{MovieService} from '../Services/movie.service'
import { Vibration } from '@ionic-native/vibration/ngx';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})

export class MoviesPage implements OnInit
{
  constructor(private storage: Storage ,private vibration: Vibration, private movieService: MovieService, private router: Router) {}
  // local variables
  firstname: string;
  TopRatedMovies: any=[];
//Button functions and vibrate plugin
  goToShows() 
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['shows']);
  }

  goToHome()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['home']);
  }

  goToUpcoming()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['upcoming']);
  }
// transfering the saved user name to each page
  ngOnInit()
  {
    this.storage.get("name").then(
      (data)=>
      {
        this.firstname= data;
      }
    ).catch(
      (error)=>
      {
        console.log(error);
      }
    );
    //pulling data straight from the api
    this.movieService.GetMovieData().subscribe
      (

        (data)=>
          {
          this.TopRatedMovies = data.results;
          }

      );

  }

  


  
}

