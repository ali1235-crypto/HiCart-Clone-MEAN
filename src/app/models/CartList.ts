import { Product } from 'src/app/models/Products';
export class CartList{
  userid!:string
  products!:[{
    productid:Product
    qty:number
    comment:string
  }]
}
