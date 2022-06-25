import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { JewelleryService } from 'src/app/service/jewellery.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { jewellery } from '../jewellery';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private _jewellery:JewelleryService,private _cart:CartService,private _wish:WishlistService) { }

    jw:jewellery;

    id:number;
    

  ngOnInit(): void {

    

    this.route.params.subscribe(data =>{
     // console.warn("PID coming from url",data['id'])
      this.id = data['id']

      
     })

     this._jewellery.getJewel(this.id).subscribe(response=>{
        this.jw = response
        //console.warn("JW ID = ",this.jw[0]['id'])
        
     })


  }


  buyNow(item){
    this._cart.addToCart(item);
    this.router.navigate(['checkout'])
  }

  addToCart(item){
    
    this._cart.addToCart(item);

  }


  addToWishList(item){
      this._wish.addToWishList(item);
  }

}
