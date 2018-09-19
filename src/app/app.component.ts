import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth:AuthService,public route:Router,private userService:UserService){ //redirect user after login with google
    this.auth.$user.subscribe( 
      user=>{
        if(user)
        {
          userService.save(user);
          let returnUrl =  localStorage.getItem('returnUrl');
          route.navigateByUrl(returnUrl);
        }
  
      }
    );
  }
}
