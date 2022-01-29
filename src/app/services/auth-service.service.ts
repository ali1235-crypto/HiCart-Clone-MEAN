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
  private lastlocalstorage=""

  jwthelper=new JwtHelperService()


  constructor(private http:HttpClient) {

   }

  Login(login:Login):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/login',login)
  }
  Register(reg:User):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/register',reg)
  }
  checkPassword(id:string,currentpass:string):Observable<any>{
    console.log(currentpass);
    return this.http.get('http://localhost:3000/api/auth/checkpassword/'+id+'/'+currentpass+'"')
  }
isLoggedIn(){
  if(!!localStorage.getItem('token')){
    if(!this.jwthelper.isTokenExpired(localStorage.getItem('token') as string)&&this.jwthelper.decodeToken(localStorage.getItem('token') as string)){
     return true
    }
    else{
      return false
    }
  }
  return false
}
getId(){
  if(this.isLoggedIn()){
    return this.jwthelper.decodeToken(localStorage.getItem('token') as string).id
  }
}
saveLastLocalStorage(){
  if(!!localStorage.getItem('token'))
  this.lastlocalstorage=localStorage.getItem('token') as string
}
getToken(){
  return localStorage.getItem('token')
}
}
