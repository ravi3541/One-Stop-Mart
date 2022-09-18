import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-personalCare',
  templateUrl: './personalCare.component.html',
  styleUrls: ['./personalCare.component.scss']
})
export class PersonalCareComponent implements OnInit {

  constructor(private _product:ProductService,private _cart:CartService,private _wish:WishlistService,private route:Router) { }

  @Input() personalCare:any;


  ngOnInit(): void {
    if(!this.personalCare){
      this.getPersonalCare()
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


  getPersonalCare(){
   
    this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category=='personalcare')))
    .subscribe(
      response =>{
        this.personalCare = response;
      }
      )
  }
}
