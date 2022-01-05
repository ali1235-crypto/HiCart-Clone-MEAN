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
  getProductsByCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/api/products?category='+category,this.token)
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
