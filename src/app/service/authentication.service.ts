import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl :string = "http://127.0.0.1:8000/";

  constructor(private _http:HttpClient) { }

  login(credentials:any){
    credentials["name"]="hello world"
    console.log("Credentials  = ",credentials)
    return this._http.post(this.baseUrl+"user/login",credentials)
  }

  
}
