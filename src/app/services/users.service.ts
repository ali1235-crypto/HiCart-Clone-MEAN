import { User } from './../models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/users')
  }
  getUser(id:string):Observable<User>{
    return this.http.get<User>('http://localhost:3000/api/users/'+id)
  }
  getAddress(id:string){
    return this.http.get<any>('http://localhost:3000/api/users/address/'+id)
  }
  addUser(user:User){
    return this.http.post<User>('http://localhost:3000/api/users',user)
  }
  editUser(id:string,user:{}){
    return this.http.put<User>('http://localhost:3000/api/users/'+id,user)
  }
  deleteUser(id:string){
    return this.http.delete<User>('http://localhost:3000/api/users/'+id)
  }
}
