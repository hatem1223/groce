import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';

import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit,OnDestroy {
appUser:AppUser;
 subscription:Subscription
  constructor( private auth:AuthService) { 
 auth.appUser$.subscribe(appUser=>this.appUser=appUser); // in video 297
   }

  ngOnInit() {
  }
  logout()
  {
     this.auth.logout();
  }
ngOnDestroy()
{
  this.subscription.unsubscribe();
}
}
