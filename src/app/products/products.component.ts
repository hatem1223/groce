
import { ShoppingCartService } from './../shopping-cart.service';
import { CategoryService } from './../category.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[];

  category:string;
  filteredproducts:Product[]=[];
  products$;
  categories$;
  cart:any;
  constructor( public productservice:ProductService,  route:ActivatedRoute, public categoryservice:CategoryService, public router:Router,public shoppingcart:ShoppingCartService) {
  this.productservice.getAll().subscribe(products=>products.map(c => this.products.push(c)));
      this.products$=productservice.getAll();  
    this.categories$=this.categoryservice.getCategories();
   
   route.queryParamMap.subscribe(params=>{ // to get or read paramater from route 
   this.category=params.get('category');
    this.filteredproducts=(this.category) ? this.products.filter(p=>p.category===this.category): this.products;
   })  
   }

 /* async ngOnInit() {
   this.subscription=  (await this.shoppingcart.getCart()).subscribe(cart=>this.cart=cart);                       // video 333
  }*/
 ngOnInit()
 {
  
 }

}
