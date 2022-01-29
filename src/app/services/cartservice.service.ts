import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartList } from '../models/CartList';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  constructor(private http:HttpClient) { }

  addCartList(cart:CartList):Observable<CartList>{
    return this.http.post<CartList>('http://localhost:3000/api/cartlists',cart)
  }
  updateCartList(iduser:string,ob:{}):Observable<CartList>{
    return this.http.put<CartList>('http://localhost:3000/api/cartlists/update/'+iduser,ob)
  }
  updateCartListbyProductId(iduser:string,prid:string):Observable<CartList>{
    return this.http.put<CartList>('http://localhost:3000/api/cartlists/'+iduser,{productid:prid})
  }
  getnbofcarts(iduser:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/cartlists/'+iduser+"/nbofcarts")
  }
}
