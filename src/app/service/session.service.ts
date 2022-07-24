import { Injectable } from '@angular/core';
import { user_model } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user:user_model = new user_model();

  constructor() { }

  set(key:string, value:any){
    this.user[key]=value;
  }

  get(key:string){
    return this.user[key];
  }

  remove(key:string){
    this.user[key]=null;
  }

  clear(){
    this.user = new user_model();
  }


  setUserSession(){
    localStorage.setItem('id',this.get('id'))
    localStorage.setItem('email',this.get('email'))
    localStorage.setItem('access',this.get('access'))
    localStorage.setItem('refresh',this.get('refresh'))

  }


  setSessionStorage(){
    this.user.id = parseInt(localStorage.getItem('id'))
    this.user.email = localStorage.getItem('email')
    this.user.access = localStorage.getItem('access')
    this.user.refresh = localStorage.getItem('refresh')
  }
}
