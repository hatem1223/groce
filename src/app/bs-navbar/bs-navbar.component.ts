import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';

import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit,OnDestroy {
appUser:AppUser;
 subscription:Subscription;

 cart$:Observable<ShoppingCart>;
  constructor( private auth:AuthService,public shoppingcartservice:ShoppingCartService) { 
 
   }

  async ngOnInit() {
   this. auth.appUser$.subscribe(appUser=>this.appUser=appUser); // in video 297

   let  cart= await this.shoppingcartservice.getCart(); //to calculate total number of shopping cart items   this.cart$
                                                               

   /*cart$.subscribe(cart=>{
     this.shoppingCartItemCount=0;
     for(let ProductId in cart$.items) //cart.item
     this.shoppingCartItemCount+=cart$.items[ProductId].quantity;
   })*/
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
