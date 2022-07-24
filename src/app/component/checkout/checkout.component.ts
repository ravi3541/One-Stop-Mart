import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  
  subtotal:number=0;
  mrpTotal:number=0;
  savedOnMrp:number=0;
  couponDiscount:number=0; 
  deliveryCharge:number=0;
  grandTotal:number=0;
  coupon:string='';
  couponInvalid:boolean=false;
  validCoupons =["EAR00010","NEC00020","RIN00015","BRC00025","BRCRIN20","NECRIN25","EARNEC20"]
  cartItemsList:any=[]


  constructor(private _cart:CartService,/*private _coupon:CouponsService*/) { 
    /* 
    Subscribeing to Behavior subjects of cart service
    */

    this._cart.getjewellery().subscribe(response=>{
      this.cartItemsList=response;     
    })

    this._cart.cartTotal.subscribe(res=>{
      this.subtotal = res
    })

    this._cart.mrpTotal.subscribe(res=>{
      this.mrpTotal = res
    })

    this._cart.savedOnMrp.subscribe(res=>{
      this.savedOnMrp = res
    })

    this._cart.deliveryCharge.subscribe(res=>{
      this.deliveryCharge=res
    })

    this._cart.finalAmount.subscribe(res=>{
      this.grandTotal=res
    })
  }

  
  ngOnInit(): void {}


  couponWorker(coupon:string){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./../../wrokers/apply-coupon.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        
        this.couponDiscount = data
        if(data>0){
          
          this.grandTotal = this.subtotal + this.deliveryCharge - this.couponDiscount
          this._cart.finalAmount.next(this.grandTotal) 

        }else{
          this.couponInvalid=true
        }
       
      };
    
      let data={
        coupon:this.coupon,
        cart:this.cartItemsList
      }
    
      worker.postMessage(data);
    } else {
      console.log("Web workers are not supported in this environment.")
     
    }
  }
  
  
  applyCoupon(){
    // 1. EAR00010
    // 2. NEC00020
    // 3. RIN00015
    // 4. BRC00025
    // 5. BRCRIN20
    // 6. NECRIN25
    // 7. EARNEC20
    /*
    applying coupon discount using web worker
    */

    if(this.validCoupons.includes(this.coupon.toLocaleUpperCase())){
      this.couponInvalid=false
      this.couponWorker(this.coupon)
    }else{
      let coupon = this.coupon
      this.clearCoupon()
      this.coupon=coupon
      this.couponInvalid=true
    }


  }


  clearCoupon(){
    /*
    Clearing coupon and recalculating  total
    */
   
    this.coupon=''   
    this.couponDiscount=0;
    this.grandTotal= this.subtotal + this.deliveryCharge
    this._cart.finalAmount.next(this.grandTotal)
    this.couponInvalid=false
  }

}
