import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { JewelleryService } from 'src/app/service/jewellery.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.scss']
})
export class BraceletsComponent implements OnInit {

  constructor(private _jewellery:JewelleryService,private _cart:CartService,private _wish:WishlistService,private route:Router) { }

  @Input() bracelets:any;


  ngOnInit(): void {
    if(!this.bracelets){
      this.getBracelets()
    }
  }


  buyNow(item){
    this._cart.addToCart(item);
    this.route.navigate(['checkout'])
  }


  addToCart(item){
    this._cart.addToCart(item);

  }


  addToWishList(item){
    this._wish.addToWishList(item);
  }


  getBracelets(){
   
    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='bracelet')))
    .subscribe(
      response =>{
        this.bracelets = response;
      }
      )
  }
}
