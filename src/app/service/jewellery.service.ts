import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { jewellery } from '../component/jewellery';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {

  constructor(private http:HttpClient) { }

  
  getJewel(id){
    const head = new HttpHeaders({
      'content-type':'application/json',
      
    })

    //settin params
    const param = new HttpParams()
      .set('id',id)
     
    return this.http.get<jewellery>('http://localhost:3000/Jewellery/',{headers:head,params:param})
    
  }


  

  getJewelleries():Observable<jewellery>{

    const head = new HttpHeaders({
      'content-type':'application/json',
      
    })

    return this.http.get<jewellery>('http://localhost:3000/Jewellery/',{headers:head})
  
  }
}
