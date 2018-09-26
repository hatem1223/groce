import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/take'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
product={};
id;

  constructor(
    public category:CategoryService,
    private productservice:ProductService,
    public route:Router,
    public router:ActivatedRoute //to read route paramater                    
  ) {
    this.categories$=category.getCategories();

    this. id= this.router.snapshot.paramMap.get('id');//video 307 
    if(this.id) this.productservice.getProduct(this.id).snapshotChanges().take(1).subscribe(p=>this.product=p);
   }

  ngOnInit() {
  }
  save(product)
  {
    if(this.id) this.productservice.update(this.id,product);

    else this.productservice.create(product);
    
    this.route.navigate(['admin/products']);
  }
  delete()
  {
    if(confirm('Are you sure to delete this product'))
    {
      this.productservice.delete(this.id);
      this.route.navigate(['admin/products']);
    }
  }

}
