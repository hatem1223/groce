import { Product } from './product';
import { shoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart 
{ 
    items:shoppingCartItem[]=[];
  //key is product id
    constructor(public itemMap:{[productId:string]:shoppingCartItem}){
        this.itemMap=itemMap || {};
  for(let productId in itemMap)
  {
    let item=itemMap[productId]
   // let x=new shoppingCartItem();
    //Object.assign(x,item) // copy from item to x
    //x.$key=productId
    this.items.push(new shoppingCartItem({...item,$key:productId})) ;
    }
    }
    get  TotalItemCount()                   // get TotalItemCount()
    {
        let count=0;
        for(let productId in this.itemMap)
        count+=this.itemMap[productId].quantity;
        return count;
    }
    get totalPrice()
    {
        let sum=0;
        for(let productId in this.items)
        
            sum+=this.items[productId].totalPrice;
            return sum;
        
    }

    getQuantity(product:Product)
{
   console.log("product",product);
  let item=this.itemMap[product.$key];
 return item ? item.quantity:0;
}
    
}