import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishList } from '../models/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {


  constructor(private http:HttpClient) { }

  addWishList(wish:WishList):Observable<WishList>{
    return this.http.post<WishList>('http://localhost:3000/api/wishlists',wish)
  }
  updateWishList(iduser:string,ob:{},index:number):Observable<WishList>{
    return this.http.put<WishList>('http://localhost:3000/api/wishlists/update/'+iduser+"?index="+index,ob)
  }
  updateWishListbyProductId(iduser:string,prid:string):Observable<WishList>{
    return this.http.put<WishList>('http://localhost:3000/api/wishlists/'+iduser,{productid:prid})
  }
  getnbofhearts(iduser:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/wishlists/'+iduser+"/nbofhearts")
  }

}
