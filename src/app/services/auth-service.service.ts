import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { User } from '../models/User';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  jwthelper=new JwtHelperService()
  token={headers:{
    token:localStorage.getItem('token') as string || ""
  }}

  constructor(private http:HttpClient) {

   }

  Login(login:Login):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/login',login)
  }
  Register(reg:User):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/register',reg)
  }
  bla():Observable<any>{
    return this.http.get('http://localhost:3000/api/users/61a40c33b36ecd7204c84a98',this.token)
  }
isAdmin(){
  console.log(this.jwthelper.decodeToken(localStorage.getItem('token') as string))
}
  Google():Observable<any>{
    return this.http.get('http://localhost:3000/api/auth/auth/google')
  }
}
