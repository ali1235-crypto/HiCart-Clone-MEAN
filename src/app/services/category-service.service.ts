import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }


  getCategories(parent:string):Observable<Category[]>{
    if(parent!=""){parent="parent="+parent}
    return this.http.get<Category[]>("http://localhost:3000/api/categories?"+parent)
  }
}
