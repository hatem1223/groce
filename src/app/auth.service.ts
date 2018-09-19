import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/observable';
import {ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $user:Observable< firebase.User>  // to display the current user
  constructor(public afauth:AngularFireAuth,public route:ActivatedRoute,public userservice:UserService) {
      this.$user=afauth.authState // to make sure logout() work or not
    
    
   }

  logout()
  {
     this.afauth.auth.signOut()
  }
  login()
{
   let returnUrl=  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl',returnUrl);
  this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}
get appUser$():Observable<AppUser>
{
return  this.$user.switchMap(user=>{
  if(user)
  return this.userservice.get(user.uid);
  
  return Observable.of(null);
}

)
}

}
