import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems:any=[];
  public jewelleryList= new BehaviorSubject<any>([]);
  public cartTotal = new BehaviorSubject<number>(0);
  public mrpTotal = new BehaviorSubject<number>(0);
  public savedOnMrp = new BehaviorSubject<number>(0);
  public deliveryCharge = new BehaviorSubject<number>(0);
  public finalAmount = new BehaviorSubject<number>(0);

  _cartTotal:number;
  _mrpTotal:number;
  _savedOnMrp:number;
  _finalAmount:number;
  _deliveryCharge:number;

  constructor() { 
    this.cartTotal.subscribe(res=>{
      this._cartTotal = res
    })

    this.mrpTotal.subscribe(res=>{
      this._mrpTotal = res
    })

    this.deliveryCharge.subscribe(res=>{
      this._deliveryCharge = res
    })
  }

  getjewellery(){
    /*
    returning cart items 
    */
    return this.jewelleryList.asObservable();
  }


 


  addToCart(jewellery:any){
    /*
    Adding new Jewellery to cart 
    */

    let alreadyExist:boolean=false;
    let existingElement=undefined;

    if (this.cartItems.length>0){
      existingElement = this.cartItems.find(item => item.id===jewellery.id);
    }

    alreadyExist = (existingElement!=undefined)

    if(alreadyExist){

      existingElement.quantity++
      existingElement.total = existingElement.discounted_price*existingElement.quantity

    }else{

      jewellery.quantity=1
      jewellery.total = jewellery.discounted_price * jewellery.quantity

      this.cartItems.push(jewellery);
      this.jewelleryList.next(this.cartItems);
   
    }
  
    this._cartTotal +=jewellery.discounted_price
    this._mrpTotal += jewellery.price
    this._savedOnMrp = this._mrpTotal - this._cartTotal

    this.savedOnMrp.next(this._savedOnMrp)
    this.mrpTotal.next(this._mrpTotal)
    this.cartTotal.next(this._cartTotal)
 
    
    if (this._cartTotal>0 && this._cartTotal<2000){
      this.deliveryCharge.next(200)
    }else{
      this.deliveryCharge.next(0)
    }

    this._finalAmount = this._cartTotal+this._deliveryCharge
    this.finalAmount.next(this._finalAmount)
    
    this.jewelleryList.next(this.cartItems);
  }



  // getTotalPrice(){
  //   let total=0;
  //   this.cartItems.map((item:any)=>{
  //     item.total=item.quantity*item.discounted_price
  //     total+=item.total
  //   })

  //   return total
  // }


  // getMrpTotal(){
  //   let mrpTotal=0;
  //   this.cartItems.map((item:any)=>{
  //     mrpTotal+=item.quantity*item.price
      
  //   })

  //   return mrpTotal
  // }

  


  removeItem(jewellery:any){
    /*
    Removing Jewellery from cart 
    */

    this.cartItems.map((item:any,index:any)=>{

      if(jewellery.id===item.id){

        this._cartTotal-=item.total
        this._mrpTotal -=(item.quantity*item.price)
        this._savedOnMrp = this._mrpTotal - this._cartTotal
        
        this.cartItems.splice(index,1);

        this.savedOnMrp.next(this._savedOnMrp)
        this.mrpTotal.next(this._mrpTotal)
        this.cartTotal.next(this._cartTotal)

        if (this._cartTotal>0 && this._cartTotal<2000){
          this.deliveryCharge.next(200)
        }else{
          this.deliveryCharge.next(0)
        }
        this._finalAmount = this._cartTotal+this._deliveryCharge
        this.finalAmount.next(this._finalAmount)

        this.jewelleryList.next(this.cartItems)
      }
    })

  }


  emptyCart(){
    /*
    Deleting all jewellery from cart 
    */

    this.cartItems=[]
    this.jewelleryList.next(this.cartItems);
  }


  addItemQty(jewellery:any){
    /*
    Increasing quantity of jewellery in cart 
    */

    this.cartItems.map((item:any,index:any)=>{

      if(jewellery.id===item.id){

        let existingElement = this.cartItems.find(item => item.id===jewellery.id);
        existingElement.quantity+=1
        existingElement.total=existingElement.discounted_price*existingElement.quantity


        this._cartTotal +=jewellery.discounted_price
        this._mrpTotal += jewellery.price
        this._savedOnMrp = this._mrpTotal - this._cartTotal
        
        this.savedOnMrp.next(this._savedOnMrp)
        this.mrpTotal.next(this._mrpTotal)
        this.cartTotal.next(this._cartTotal)
        
        
        if (this._cartTotal>0 && this._cartTotal<2000){
          this.deliveryCharge.next(200)
        }else{
          this.deliveryCharge.next(0)
        }
        this._finalAmount = this._cartTotal+this._deliveryCharge
        this.finalAmount.next(this._finalAmount)
        
        this.jewelleryList.next(this.cartItems);

      }
    })

    
    
    
  }


  reduceItemQty(jewellery:any){
    /*
    Reducing quantity of jewellery in cart 
    */

    this.cartItems.map((item:any,index:any)=>{

      if(jewellery.id===item.id){
        if(item.quantity>1){
          let existingElement = this.cartItems.find(item => item.id===jewellery.id);
          existingElement.quantity-=1
          existingElement.total=existingElement.discounted_price*existingElement.quantity

          this._cartTotal -=jewellery.discounted_price
          this._mrpTotal -= jewellery.price
          this._savedOnMrp = this._mrpTotal - this._cartTotal
          
          this.savedOnMrp.next(this._savedOnMrp)
          this.mrpTotal.next(this._mrpTotal)
          this.cartTotal.next(this._cartTotal)
          

          if (this._cartTotal>0 && this._cartTotal<2000){
            this.deliveryCharge.next(200)
          }else{
            this.deliveryCharge.next(0)
          }

          this._finalAmount = this._cartTotal+this._deliveryCharge
          this.finalAmount.next(this._finalAmount)

          this.jewelleryList.next(this.cartItems);

        }
      }
    })

     
  }

}
