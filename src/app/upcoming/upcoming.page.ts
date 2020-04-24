import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{UpcomingService} from '../Services/upcoming.service'
import { Vibration } from '@ionic-native/vibration/ngx';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  constructor(private storage: Storage ,private vibration: Vibration,private upcomingService: UpcomingService ,private router: Router) {}
  // local variables
  firstname: string;
  UpcomingArray: any=[];
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

  goToShows() 
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['shows'])
  }
// user saving there name to local storage
  ngOnInit()
  { this.storage.get("name").then(
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
    this.upcomingService.GetUpcomingData().subscribe
      (

        (data)=>
          {
          this.UpcomingArray = data.results;
          }

      );

  }

}
