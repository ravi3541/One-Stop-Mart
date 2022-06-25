import { Injectable, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsService implements OnInit{



  constructor(private _cart:CartService) { }


  ngOnInit(): void {
    this.check_EAR00010();
    this.check_NEC00020();
    this.check_RIN00015();
    this.check_BRC00025();
    
    this.check_BRCRIN20();
    this.check_NECRIN25();
    this.check_EARNEC20();

    
  }


// 1. EAR00010---minimum=1500---
// 2. NEC00020---minimum=2500---
// 3. RIN00015---minimum=2000
// 4. BRC00025---minimum=3000

// 5. BRCRIN20---minimum=5000
// 6. NECRIN25---minimum=5000
// 7. EARNEC20---minimum=5000---

//coupon 1:EAR00010
check_EAR00010(){
  let isEarring:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=1500)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='earring'){
      isEarring=true;
    }else{
      others=true;
    }
    
  });

  if(isEarring && !others && minLimit){
    discount_applicable=10;
  }else{
    discount_applicable=0;
  }

  console.log("only Earrings EAR00010 = ",discount_applicable+" %")
  return discount_applicable
}


//Coupon 2: NEC00020
check_NEC00020(){
  let isNecklace:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=2500)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='necklace'){
      isNecklace=true;
    }else{
      others=true;
    }
    
  });

  if(isNecklace && !others && minLimit){
    discount_applicable=20;
  }else{
    discount_applicable=0;
  }

  console.log("only Necklace NEC00020 = ",discount_applicable+" %")
  return discount_applicable
}



//coupon 3: RIN00015

check_RIN00015(){
  let isRing:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=2000)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='ring'){
      isRing=true;
    }else{
      others=true;
    }
    
  });

  if(isRing && !others && minLimit){
    discount_applicable=15;
  }else{
    discount_applicable=0;
  }

  console.log("only Rings RIN00015 = ",discount_applicable+" %")
  return discount_applicable
}



//coupon 4: BRC00025

check_BRC00025(){
  let isBracelet:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=3000)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='bracelet'){
      isBracelet=true;
    }else{
      others=true;
    }
    
  });

  if(isBracelet && !others && minLimit){
    discount_applicable=25;
  }else{
    discount_applicable=0;
  }

  console.log("only Bracelet BRC00025 = ",discount_applicable+" %")
  return discount_applicable
}




//coupon 5: BRCRIN20()
check_BRCRIN20(){
  let isRring:boolean=false;
  let isBracelet:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=5000)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='ring'){
      isRring=true;
    }else if(element.category==='bracelet'){
      isBracelet=true;
    }else{
      others=true
    }
    
  });

  if(isRring && isBracelet && minLimit && !others){
    discount_applicable=20;
  }else{
    discount_applicable=0;
  }


  console.log("Bracelet Ring BRCRIN20 = ",discount_applicable+" %")
  return discount_applicable

}




//coupon 6: NECRIN25

check_NECRIN25(){
  let isRing:boolean=false;
  let isNecklace:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=5000)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='ring'){
      isRing=true;
    }else if(element.category==='necklace'){
      isNecklace=true;
    }else{
      others=true
    }
    
  });

  if(isRing && isNecklace && minLimit && !others){
    discount_applicable=25;
  }else{
    discount_applicable=0;
  }


  console.log("Ring necklace NECRIN25 = ",discount_applicable+" %")
  return discount_applicable
}




//coupon 7: EARNEC20
check_EARNEC20(){
  let isEarring:boolean=false;
  let isNecklace:boolean=false;
  let others:boolean=false;
  let minLimit:boolean=(this._cart.getTotalPrice()>=5000)
  let discount_applicable:number=0;

  this._cart.cartItems.forEach(element => {
    if(element.category==='earring'){
      isEarring=true;
    }else if(element.category==='necklace'){
      isNecklace=true;
    }else{
      others=true
    }
    
  });

  if(isEarring && isNecklace && minLimit && !others){
    discount_applicable=20;
  }else{
    discount_applicable=0;
  }


  console.log("Earring necklace EARNEC20 = ",discount_applicable+" %")
  return discount_applicable
}



}
