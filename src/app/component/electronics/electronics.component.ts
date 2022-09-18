import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  constructor(private _product:ProductService,private _cart:CartService,private _wish:WishlistService,private route:Router) { }

  @ Input() electronics:any;

  ngOnInit(): void {
    if(!this.electronics){
      this.getElectronics()
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


  getElectronics(){
    
    this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category=='electronics')))
    .subscribe(
      response =>{
        this.electronics = response;
      })
  }

}
