import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartCount:number=0;
  public wishCount:number=0;

  constructor(private _cart:CartService,private _wish:WishlistService,private route:Router) { }

  ngOnInit(): void {
    this._cart.getjewellery().subscribe(response=>{
      this.cartCount=response.length; 
    })



    this._wish.getWishList().subscribe(response=>{
      this.wishCount=response.length; 
    })
  }

removeAllItems(){
  this._cart.emptyCart();
  this.route.navigate(['dashboard'])

}

 

}
