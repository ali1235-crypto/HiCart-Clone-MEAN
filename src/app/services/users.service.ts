import { User } from './../models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token={headers:{
    token:localStorage.getItem('token') as string || ""
  }}

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/users',this.token)
  }
  addUser(user:User){
    return this.http.post<User>('http://localhost:3000/api/users',user,this.token)
  }
  editUser(id:string,user:User){
    return this.http.put<User>('http://localhost:3000/api/users/'+id,user,this.token)
  }
  deleteUser(id:string){
    return this.http.delete<User>('http://localhost:3000/api/users/'+id,this.token)
  }
}
