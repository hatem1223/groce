import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
cart$;
  constructor( public shoppingcartservice:ShoppingCartService) { }

  async ngOnInit() {
     this.cart$=await this.shoppingcartservice.getCart(); //video 338
  }

}
