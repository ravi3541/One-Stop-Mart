import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionService } from './session.service';


const ignoreUrls = ['login'];

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  
  constructor(private _route:Router,private _session:SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(ignoreUrls.find(url=>req.url.includes(url))){
      return next.handle(req).pipe(
        catchError(err=>this.handleError(err)));
    }



    const token = this._session.get('access')
    let token_request = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
    
    return next.handle(token_request).pipe(
      catchError(err=>this.handleError(err)));
    
  }


  handleError(err:any):Observable<any>{
    if (err.status===401){
      console.log("Error 401")
      
    }else if(err.status===403){
      console.log("Error 403")
    }
    else if(err.status === 502){
      console.log("Error 502")
    }

    this._route.navigate['rewards']
    return throwError(err)
    
  }

}
