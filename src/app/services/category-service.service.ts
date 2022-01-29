import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  jwthelper=new JwtHelperService()


  constructor(private http:HttpClient) { }


  getCategories(parent:string,name:string=""):Observable<Category[]>{
    if(parent!=""){parent="parent="+parent}
    if(name!=""){parent="";name="name="+name}
    return this.http.get<Category[]>("http://localhost:3000/api/categories?"+parent+name)
  }
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/api/categories/all")
  }
  addCategory(category:Category):Observable<Category>{
    return this.http.post<Category>("http://localhost:3000/api/categories",category)
  }
  editCategory(id:string,update:object):Observable<Category>{
    return this.http.put<Category>("http://localhost:3000/api/categories/"+id,update)
  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>("http://localhost:3000/api/categories/"+id)
  }
}
