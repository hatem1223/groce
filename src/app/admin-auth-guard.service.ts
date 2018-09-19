
import { Observable } from 'rxjs/observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router'

import { AppUser } from './models/app-user';

import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService,public userservice:UserService) { }
  canActivate(): Observable<boolean> {
   //return this.auth.$user.switchMap(user=>this.userservice.get(user.uid))
 return this.auth.appUser$.map(appUser=>appUser.isAdmin);  
  
  }
   
  }

