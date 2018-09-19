import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
  constructor(public category:CategoryService,private productservice:ProductService) {
    this.categories$=category.getCategories();
   }

  ngOnInit() {
  }
  save(product)
  {
    this.productservice.create(product);
  }

}
