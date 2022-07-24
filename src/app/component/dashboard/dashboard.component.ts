import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { JewelleryService } from 'src/app/service/jewellery.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _jewellery: JewelleryService,private _cart:CartService,private _wish:WishlistService, private route:Router) { }

  jewellery:any;
  ring:any;
  necklace:any;
  bracelet:any;
  earring:any;
  filter:boolean=false;
  jewel_type:any;
 
  
  ngOnInit(): void {
    this.getEarrings()
    this.getNecklace()
    this.getRings()
    this.getBracelet()
  }


  buyNow(item:any){
    this._cart.addToCart(item);
    this.route.navigate(['checkout'])
  }


  addToWIshList(jewellery:any){
    this._wish.addToWishList(jewellery)
  }


  getEarrings(){

    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='earring')))
    .subscribe(
      response =>{
        this.earring = response;
      })
  }
 

  getNecklace(){

    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='necklace')))
    .subscribe(
      response =>{
        this.necklace = response;
      }
      )
  }
 

  getBracelet(){

    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='bracelet')))
    .subscribe(
      response =>{
        this.bracelet = response;
      }
      )
  }


  getRings(){
   
    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='ring')))
    .subscribe(
      response =>{
        this.ring = response;
      })
  }

}
