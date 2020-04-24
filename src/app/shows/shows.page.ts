import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{ShowService} from '../Services/show.service'
import { Vibration } from '@ionic-native/vibration/ngx';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.page.html',
  styleUrls: ['./shows.page.scss'],
})
export class ShowsPage implements OnInit{

  constructor(private storage: Storage ,private vibration: Vibration,private showService: ShowService ,private router: Router) {}
  // local variables
  firstname: string;
  TopRatedShows: any=[];
  //Button functions and vibrate plugin
  goToHome() 
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['home'])
  }

  goToMovies()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['movies'])
  }

  goToUpcoming()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['upcoming'])
  }

  ngOnInit()
  {// user saving there name to local storage
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
    this.showService.GetShowData().subscribe
      (

        (data)=>
          {
          this.TopRatedShows = data.results;
          }

      );

  }

}
