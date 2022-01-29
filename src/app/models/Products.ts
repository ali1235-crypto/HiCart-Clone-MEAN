import { Category } from "./category"

export class Product{
  _id!:string
  title!:string
  desc!:string
  price!:number
  rate!:number
  img!:string
  imgs!:[string]
  size!:string
  soldby!:string
  category!:Category[]
  availability!:boolean
  capacity!:string
  type!:string
  discount!:number
  delivery_fees!:boolean
  specification!:{
    productcode:string
    brand:string
    color:string
    dimensions:string
    features:string
    WARRANTY_VALIDITY:string
  }
}
