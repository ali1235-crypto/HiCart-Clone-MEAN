import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<{products:Product[]}>{
    return this.http.get<{products:Product[]}>('http://localhost:3000/api/products')
  }
  getProductsById(Id:string):Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/api/products/'+Id)
  }
  getProductsByCategory(category:string,page:string='1',limit:string='20',fieldname:string='price',sort:string='1'):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/products?category='+category+"&page="+page+'&limit='+limit+'&fieldname='+fieldname+'&sort='+sort)
  }

  addProduct(product:Product){
    return this.http.post<Product>('http://localhost:3000/api/products',product)
  }
  editProduct(id:string,product:Product){
    return this.http.put<Product>('http://localhost:3000/api/products/'+id,product)
  }
  deleteProduct(id:string){
    return this.http.delete<Product>('http://localhost:3000/api/products/'+id)
  }
  search(nameorcategory:string):Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/api/products/search?search='+nameorcategory)
  }
}
