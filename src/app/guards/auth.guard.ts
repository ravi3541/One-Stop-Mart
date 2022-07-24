import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _session:SessionService, private _route:Router){}
  canActivate(){

    let token = this._session.get('access')
    if(token && token!==null && token!=='null' && token != undefined){
      return true
    }else{
      this._session.setSessionStorage()
      token = this._session.get('access')
      if(token && token!==null && token!=='null' && token != undefined){
        return true
      }else{
        this._route.navigate(['login'])
        return false
      }

    }
   
  }
  
}
