import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public db:AngularFireDatabase) { }
  create(product)  // to make sure the product in right shape
  {
    return this.db.list('/products').push(product)
  }
  getAll() // get products from firebase and display the price and title in table
  {
    return this.db.list('/products').valueChanges();
  }
  getProduct(productId)//retrive one product video 307
  {
   return this.db.object('/products/'+productId);
  }
  update(productId,product)
  {
     return this.db.object('/products/'+productId).update(product);
  }
  delete(productId)
  {
    return this.db.object('/products/'+productId).remove();
  }
}
