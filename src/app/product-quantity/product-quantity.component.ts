import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import {  Input } from '@angular/core';
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product:Product;

  @Input('shopping-cart') shoppingCart;
   constructor(public cartservice:ShoppingCartService) { }


  ngOnInit() {
  }

  addToCart()
{
this.cartservice.addTOCart(this.product); 
}

removeFromCart()
{
  this.cartservice.removeFromCart(this.product);
}

}
