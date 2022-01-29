import { Product } from 'src/app/models/Products';
export class WishList{
  userid!:string
  products!:[{
    productid:Product
    qty:number
    comment:string
  }]
}
