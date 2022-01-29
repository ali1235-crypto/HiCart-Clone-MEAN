import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderList } from '../models/OrderList';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {


  constructor(private http:HttpClient) { }

  getOrderLists():Observable<OrderList[]>{
    return this.http.get<OrderList[]>('http://localhost:3000/api/orderlists')
  }
  getOrderListBuIdUser(id:string):Observable<OrderList[]>{
    return this.http.get<OrderList[]>('http://localhost:3000/api/orderlists/getbyuser/'+id)
  }
  addOrderList(order:OrderList,id:string):Observable<OrderList>{
    return this.http.post<OrderList>('http://localhost:3000/api/orderlists/'+id,order)
  }
  updateOrderList(iduser:string,ob:{}):Observable<OrderList>{
    return this.http.put<OrderList>('http://localhost:3000/api/orderlists/update/'+iduser,ob)
  }
  updateOrderListbyProductId(iduser:string,prid:string):Observable<OrderList>{
    return this.http.put<OrderList>('http://localhost:3000/api/orderlists/'+iduser,{productid:prid})
  }
}
