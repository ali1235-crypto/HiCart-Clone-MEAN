import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  token={headers:{
    token:localStorage.getItem('token') as string || ""
  }}

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/api/products',this.token)
  }
  getProductsById(Id:string):Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/api/products/'+Id,this.token)
  }
  getProductsByCategory(category:string,page:string='1',limit:string='20',fieldname:string='price',sort:string='1'):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/products?category='+category+"&page="+page+'&limit='+limit+'&fieldname='+fieldname+'&sort='+sort,this.token)
  }
  addProduct(product:Product){
    return this.http.post<Product>('http://localhost:3000/api/products',product,this.token)
  }
  editProduct(id:string,product:Product){
    return this.http.put<Product>('http://localhost:3000/api/products/'+id,product,this.token)
  }
  deleteProduct(id:string){
    return this.http.delete<Product>('http://localhost:3000/api/products/'+id,this.token)
  }

}
