import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  @ Output() exportedProduct: Product;
  products = [];
 subscription:Subscription;
 filteredproducts:any[];
  constructor(public productservice:ProductService) { 
   this.subscription= this.productservice.getAll()   .subscribe(products=> {
    console.log(products);
    products.map(c=> {
      this.products.push(c);
      console.log(c);
     })
   }); 
   this.filteredproducts=this.products;
  }

  ngOnInit() {
  }
  filter(query:string)
  {
    this.filteredproducts=(query) ?
    this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  getProduct(product: Product) {
    this.exportedProduct = product;
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();

  }

}
