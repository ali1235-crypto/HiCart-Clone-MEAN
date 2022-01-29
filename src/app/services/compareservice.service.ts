import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompareList } from '../models/CompareList';

@Injectable({
  providedIn: 'root'
})
export class CompareserviceService {


  constructor(private http:HttpClient) { }

  addCompareList(compare:CompareList):Observable<CompareList>{
    return this.http.post<CompareList>('http://localhost:3000/api/comparelists',compare)
  }
  updateCompareList(iduser:string,ob:{}):Observable<CompareList>{
    return this.http.put<CompareList>('http://localhost:3000/api/comparelists/update/'+iduser,ob)
  }
  updateCompareListbyProductId(iduser:string,prid:string):Observable<CompareList>{
    return this.http.put<CompareList>('http://localhost:3000/api/comparelists/'+iduser,{productid:prid})
  }
  getnbofcopmares(iduser:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/comparelists/'+iduser+"/nbofcompares")
  }
}
