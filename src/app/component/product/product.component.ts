import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { product } from '../product';
import { map } from 'rxjs';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _http:HttpClient,private route:ActivatedRoute,private router:Router,private _product:ProductService,private _cart:CartService,private _wish:WishlistService) {
    router.events.subscribe((val)=>{

      this.route.params.subscribe(data =>{
        this.id = data['id']
        this.ngOnInit()
       })
    })
   }

  prod:product;
  similar:any;
  electronics:boolean;
  homekitchen:boolean;
  groceries:boolean;
  personalcare:boolean;

  id:number;    

  ngOnInit(): void {

    this.route.params.subscribe(data =>{
      this.id = data['id']
     })


     this._product.getProduct(this.id).subscribe(response=>{
        this.prod = response  
        let category = this.prod[0].category
        if (category=="electronics"){
          this.electronics=true
          this.homekitchen=false
          this.groceries=false
          this.personalcare=false
        }else if (category=="homekitchen"){
          this.homekitchen=true
          this.electronics=false
          this.groceries=false
          this.personalcare=false
        }else if (category=="groceries"){
          this.groceries=true
          this.electronics=false
          this.homekitchen=false
          this.personalcare=false
        }else if (category=="personalcare"){
          this.personalcare=true
          this.electronics=false
          this.homekitchen=false
          this.groceries=false
        }
        this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category==category)))
    .subscribe(
      response =>{
        this.similar = response;
      })
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
