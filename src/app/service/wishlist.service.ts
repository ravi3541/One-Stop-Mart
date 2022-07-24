import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishListItems:any=[];
  public wishList= new BehaviorSubject<any>([]);

  constructor() { }

  getWishList(){
    return this.wishList.asObservable();
  }


  setWishList(jewellery:any){
    this.wishListItems.push(jewellery);
    this.wishList.next(jewellery);
  }


  addToWishList(jewellery:any){
    let alreadyExist:boolean=false;
    let existingElement=undefined;

    if (this.wishListItems.length>0){
      existingElement = this.wishListItems.find(item => item.id===jewellery.id);
    }

    alreadyExist = (existingElement!=undefined)

    if(!alreadyExist){
      this.wishListItems.push(jewellery);
    this.wishList.next(this.wishListItems);
      
    }
    this.wishList.next(this.wishListItems);
  }


  removeFromWishList(jewellery:any){
    this,this.wishListItems.map((item:any,index:any)=>{
      if(jewellery.id===item.id){
        this.wishListItems.splice(index,1);
      }
    })

    this.wishList.next(this.wishListItems)

  }


}
