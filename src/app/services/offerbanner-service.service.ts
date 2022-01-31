import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BannerOffer } from '../models/banneroffer';

@Injectable({
  providedIn: 'root'
})
export class OfferbannerServiceService {

  constructor(private http:HttpClient) { }

  addBanner(bo:BannerOffer):Observable<BannerOffer>{
    return this.http.post<BannerOffer>('http://localhost:3000/api/banners/',bo)
  }
  editBanner(id:string,bo:BannerOffer):Observable<BannerOffer>{
    return this.http.put<BannerOffer>('http://localhost:3000/api/banners/'+id,bo)
  }
  deleteBanner(id:string){
    return this.http.delete<BannerOffer>('http://localhost:3000/api/banners/'+id)
  }
  getBanners():Observable<BannerOffer[]>{
    return this.http.get<BannerOffer[]>('http://localhost:3000/api/banners/')
  }
  addOffer(bo:BannerOffer):Observable<BannerOffer>{
    return this.http.post<BannerOffer>('http://localhost:3000/api/offers/',bo)
  }
  editOffer(id:string,bo:BannerOffer):Observable<BannerOffer>{
    return this.http.put<BannerOffer>('http://localhost:3000/api/offers/'+id,bo)
  }
  deleteOffer(id:string){
    return this.http.delete<BannerOffer>('http://localhost:3000/api/offers/'+id)
  }
  getOffers():Observable<BannerOffer[]>{
    return this.http.get<BannerOffer[]>('http://localhost:3000/api/offers/')
  }
}
