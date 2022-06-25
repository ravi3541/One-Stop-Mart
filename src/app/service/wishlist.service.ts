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
      //jewellery.quantity=1

      console.log("jewellery qty = "+ jewellery.quantity)

      this.wishListItems.push(jewellery);
    this.wishList.next(this.wishListItems);
    //this.getTotalPrice();
      
    }


    console.log("--------wishListItems------",this.wishListItems)
    this.wishList.next(this.wishListItems);
  }



  // getTotalPrice(){
  //   let total=0;
  //   this.wishListItems.map((item:any)=>{
  //     item.total=item.quantity*item.discounted_price
  //     total+=item.total
  //   })

  //   return total
  // }


  // getMrpTotal(){
  //   let mrpTotal=0;
  //   this.wishListItems.map((item:any)=>{
  //     mrpTotal+=item.quantity*item.price
      
  //   })

  //   return mrpTotal
  // }

  


  removeFromWishList(jewellery:any){
    this,this.wishListItems.map((item:any,index:any)=>{
      if(jewellery.id===item.id){
        this.wishListItems.splice(index,1);
        //console.log("index = "+index)


      }
    })

    this.wishList.next(this.wishListItems)
    //console.log("--------wishListItems------",this.wishListItems)

  }


  // emptyCart(){
  //   this.wishListItems=[]
  //   this.wishList.next(this.wishListItems);
  // }

}
