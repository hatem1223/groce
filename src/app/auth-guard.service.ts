import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import{CanActivate,Router,RouterStateSnapshot} from '@angular/router'
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor( public auth:AuthService,public route:Router) { }
  canActivate(route,state:RouterStateSnapshot)
  {
     return this.auth.$user.map(
      user=>{
        if(user) return true;  // protecting routes like check-out component not any user enter to check out
        this.route.navigate(['/login'],{queryParams:{returnUrl:state.url }});
        return false;
      }
    );
  }
}
