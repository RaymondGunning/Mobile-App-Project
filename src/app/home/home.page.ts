import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{HomeService} from '../Services/home.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private storage: Storage ,private vibration: Vibration,private homeService: HomeService ,private router: Router) {}
// local variables
  name : string;
  HomePageData : any=[];

//Button functions and vibrate plugin
  goToMovies()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['movies']);
  }

  goToShows()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['shows']);
  }

  goToUpcoming()
  {
    this.vibration.vibrate(1000);
    this.router.navigate(['upcoming']);
  }
//pulling data straight from the api
  ngOnInit()
  {
    this.homeService.GetHomeData().subscribe
      (

        (data)=>
          {
          this.HomePageData = data.articles;
          }

      );
  }
// user saving there name to local storage
  onSave()
  {
    console.log(this.name);
    this.storage.set("name",this.name);
  }


}
