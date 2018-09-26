import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from './models/shopping-cart';
import { FirebaseDatabase } from 'angularfire2';
 

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
quantity:number;

  constructor(public db:AngularFireDatabase) { }

  create()
  {
    return this.db.list('/shopping-carts').push({
      dataCreated:new Date().getTime()
    })
  }

 async addTOCart(product:Product) //add product to shopping-cart 
  {
     


     this.updateItemQuantity(product,1);
                                                                                   //item id must the same of product id
      
  } 
   async getOrCreateCartId():Promise<string> // not respnsible for  adding any anthing to shopping
   {
     let cartId=localStorage.getItem('cartId');
     if(cartId) return cartId;
    
       let result= await this.create();
       localStorage.setItem('cartId',result.key); 
       return result.key;  
     
     
   
   }

    async getCart():Promise<AngularFireObject<ShoppingCart>>// reading shopping cart from firebase :Promise<Observable<ShoppingCart>>
   {                                                        // return this.db.object('/shopping-carts'+cartId).map(x=>new ShoppingCart(x.items))
     let cartId=await  this.getOrCreateCartId()              
    return this.db.object('/shopping-carts'+cartId)        
   }

   getItem(cartId:string,productId:string)
   {
     return  this.db.object('/shopping-carts/'+cartId+'/items/'+productId);  
   }

  async removeFromCart(product:Product)
   {
    this.updateItemQuantity(product,-1);
}

async updateItemQuantity(product:Product,change:number) //increment or decrement 
{
  let cartId=await  this.getOrCreateCartId()
  let items$=this.getItem(cartId,product.$key);
  items$.valueChanges().take(1).subscribe(item=>{
   
    items$.update({
      title:product.title,
      imageUrl:product.imageUrl,
      price:product.price,
     // quantity:(item.quantity || 0)+change  
    
    
    
    });                // items$.update({product:product,quantity:(item.quantity || 0) +change});
    
})
}



}