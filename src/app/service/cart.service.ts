import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems:any=[];
  public jewelleryList= new BehaviorSubject<any>([]);

  constructor() { }

  getjewellery(){
    return this.jewelleryList.asObservable();
  }


  setJewellery(jewellery:any){
    this.cartItems.push(jewellery);
    this.jewelleryList.next(jewellery);
  }


  addToCart(jewellery:any){
    let alreadyExist:boolean=false;
    let existingElement=undefined;

    if (this.cartItems.length>0){
      existingElement = this.cartItems.find(item => item.id===jewellery.id);
    }

    alreadyExist = (existingElement!=undefined)

    if(alreadyExist){
      existingElement.quantity++

    
    }else{
      jewellery.quantity=1

      console.log("jewellery qty = "+ jewellery.quantity)

      this.cartItems.push(jewellery);
    this.jewelleryList.next(this.cartItems);
    this.getTotalPrice();
      
    }


    console.log("--------CartItems------",this.cartItems)
    this.jewelleryList.next(this.cartItems);
  }



  getTotalPrice(){
    let total=0;
    this.cartItems.map((item:any)=>{
      item.total=item.quantity*item.discounted_price
      total+=item.total
    })

    return total
  }


  getMrpTotal(){
    let mrpTotal=0;
    this.cartItems.map((item:any)=>{
      mrpTotal+=item.quantity*item.price
      
    })

    return mrpTotal
  }

  


  removeItem(jewellery:any){
    this,this.cartItems.map((item:any,index:any)=>{
      if(jewellery.id===item.id){
        this.cartItems.splice(index,1);
        //console.log("index = "+index)


      }
    })

    this.jewelleryList.next(this.cartItems)
    //console.log("--------CartItems------",this.cartItems)

  }


  emptyCart(){
    this.cartItems=[]
    this.jewelleryList.next(this.cartItems);
  }



}
