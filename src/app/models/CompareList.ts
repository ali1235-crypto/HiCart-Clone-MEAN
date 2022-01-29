import { Product } from 'src/app/models/Products';
export class CompareList{
  userid!:string
  products!:[{
    productid:Product
    qty:number
    comment:string
  }]
}
