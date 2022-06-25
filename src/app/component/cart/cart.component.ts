import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cart:CartService) { }

  

  public cartItemsList:any=[];
  public grandtotal :number=0;
 




  ngOnInit(): void {

    this._cart.getjewellery().subscribe(response=>{
      this.cartItemsList=response;
      this.grandtotal = this._cart.getTotalPrice();
    })
  }

  


  addToCart(item:any){
    this._cart.addToCart(item);
    this.grandtotal = this._cart.getTotalPrice();

  }

  removeFromCart(item:any){
    this._cart.removeItem(item);
    this.grandtotal = this._cart.getTotalPrice();
  }

}
