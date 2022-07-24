import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { JewelleryService } from 'src/app/service/jewellery.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.scss']
})
export class EarringsComponent implements OnInit {

  constructor(private _jewellery:JewelleryService,private _cart:CartService,private _wish:WishlistService,private  route:Router) { }

  @Input() earrings:any;

  ngOnInit(): void {
    if(!this.earrings){
      this.getEarring()
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


  getEarring(){
    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='earring')))
    .subscribe(
      response =>{
        this.earrings = response;
      })
  }
}
