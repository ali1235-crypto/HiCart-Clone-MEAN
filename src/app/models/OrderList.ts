import { Product } from 'src/app/models/Products';
export class OrderList{
  _id!:string
  userid!:string
  products!:[{
    productid:Product
    qty:number
  }]
  amount!:Number
  address!:{
    addressnickname:string
    stateprovince:string
    streetnameno:string
    city:string
    country:string
    zip:string
  }
  status!:string
}
