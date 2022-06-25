import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CouponsService } from 'src/app/service/coupons.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private _cart:CartService,private _coupon:CouponsService) { }

  subtotal:number=0;
  mrpTotal:number=0;
  savedOnMrp:number=0;

  couponDiscountPercentage:number=0;
  couponDiscount:number=0;
  
  deliveryCharge:number=0;
  grandTotal:number=0;

  coupon:string='';
  couponInvalid:boolean=false;

  cartItemsList:any=[]

  ngOnInit(): void {

    this._cart.getjewellery().subscribe(response=>{
      this.cartItemsList=response;
      
    })


    
    this.mrpTotal = this._cart.getMrpTotal();
    this.subtotal = this._cart.getTotalPrice();
  
    this.savedOnMrp = this.mrpTotal - this.subtotal;
    
    if(this.couponDiscountPercentage>0){
      this.couponDiscount = (this.subtotal*this.couponDiscountPercentage)/100  
    }
  
    // this.couponDiscount = (this.subtotal*this.couponDiscountPercentage)/100
  
    if(this.subtotal>0 && this.subtotal<2000){
        this.deliveryCharge=200;
      }else{
        this.deliveryCharge=0;
      }
  
      if(this.subtotal>0){
  
        this.grandTotal = (this.subtotal - this.couponDiscount) + this.deliveryCharge;
      }
  

    console.log("Delivery charge = ",this.grandTotal)

    
    
  }


  applyCoupon(){
    console.log("inside applycoupon")
    console.log("Coupon code = "+this.coupon.toUpperCase())


//     1. EAR00010
// 2. NEC00020
// 3. RIN00015
// 4. BRC00025
// 5. BRCRIN20
// 6. NECRIN25
// 7. EARNEC20

    switch (this.coupon.toUpperCase()){

      case 'EAR00010':
        this.couponDiscountPercentage=this._coupon.check_EAR00010();
        break;

      case 'NEC00020':
        this.couponDiscountPercentage=this._coupon.check_NEC00020();
        break;

      
      case 'RIN00015':
        this.couponDiscountPercentage=this._coupon.check_RIN00015();
        break;

      case 'BRC00025':
        this.couponDiscountPercentage=this._coupon.check_BRC00025();
        break;

      case 'BRCRIN20':
        this.couponDiscountPercentage=this._coupon.check_BRCRIN20();
        break;


      case 'NECRIN25':
        this.couponDiscountPercentage=this._coupon.check_NECRIN25();
        break;

        
      case 'EARNEC20':
      this.couponDiscountPercentage=this._coupon.check_EARNEC20();
      
      
      break;

      default:
        this.couponDiscountPercentage=0;
        this.couponInvalid=true;


    }

    if(this.couponDiscountPercentage==0){
      this.couponInvalid=true
      this.ngOnInit();
    }else{
      this.couponInvalid=false
      
      this.ngOnInit();
    }


  }


  clearCoupon(){
    console.log("clearcpoupon")
    this.coupon=''

    this.subtotal=0;
    this.mrpTotal=0;
    this.savedOnMrp=0;

    this.couponDiscountPercentage=0;
    this.couponDiscount=0;
  
    this.deliveryCharge=0;
    this.grandTotal=0;
    this.ngOnInit();
  }




  
  

}
