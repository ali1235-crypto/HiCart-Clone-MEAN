import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authservice:AuthServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:this.authservice.getToken()+""
      }
    })
    return next.handle(tokenizedReq)
  }
}
