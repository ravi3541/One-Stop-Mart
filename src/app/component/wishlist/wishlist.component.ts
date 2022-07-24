import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
  public wishList:any=[]

  constructor(private _wish:WishlistService,private _cart:CartService) { }

  ngOnInit(): void {

    this._wish.getWishList().subscribe(response=>{
      this.wishList=response;
      
    })
  }


  removeFromWishlist(jewellery:any){
    this._wish.removeFromWishList(jewellery);
  }


  moveToCart(jewellery:any){
    this._cart.addToCart(jewellery);
  }

}
