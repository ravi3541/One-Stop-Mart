import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { JewelleryService } from 'src/app/service/jewellery.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {

  constructor(private _jewellery:JewelleryService,private _cart:CartService,private _wish:WishlistService,private route:Router) { }

  ring:any;


  ngOnInit(): void {
    this.getRings()
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



  getRings(){
    //console.log("rings called")

    this._jewellery.getJewelleries()
    .pipe(map(jewellery=>jewellery.filter(jw=>jw.category=='ring')))
    .subscribe(
      response =>{
        this.ring = response;

        // for(let e of this.jewellery){
        //  console.log(e.desc.text_desc)
        // }

      },(error)=>{
        console.log("Unable to get Earring Data")
      }
      )
  }

}
