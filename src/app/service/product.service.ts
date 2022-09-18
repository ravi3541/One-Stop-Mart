import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { product } from '../component/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  
  getProduct(id){
    const head = new HttpHeaders({
      'content-type':'application/json',
      
    })

    //settin params
    const param = new HttpParams()
      .set('id',id)
     
    return this.http.get<product>('http://localhost:3000/Products/',{headers:head,params:param})
    
  }


  

  getProducts():Observable<product>{

    const head = new HttpHeaders({
      'content-type':'application/json',
      
    })

    return this.http.get<product>('http://localhost:3000/Products/',{headers:head})
  
  }
}
