import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cart:CartService, private _checkout:CheckoutComponent) { }

  public cartItemsList:any=[];
  public subtotal :number=0;
  public mrptotal : number=0;

  ngOnInit(): void {

    this._cart.jewelleryList.subscribe(response=>{
      this.cartItemsList=response;
      
    })


    this._cart.mrpTotal.subscribe(res=>{
      this.mrptotal = res
    })


    this._cart.cartTotal.subscribe(res=>{
      this.subtotal = res
    })


  }

  

  removeFromCart(item:any){
    this._cart.removeItem(item);
    this._checkout.clearCoupon()
  }


  addItemQty(item:any){
    this._cart.addItemQty(item);
    this._checkout.clearCoupon()
  }


  reduceItemQty(item:any){
    this._cart.reduceItemQty(item);
    this._checkout.clearCoupon()
  }

}
