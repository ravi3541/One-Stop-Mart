import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  constructor(private _product: ProductService,private _cart:CartService,private _wish:WishlistService, private route:Router, private router:ActivatedRoute) {
    // alert(this.category)
    route.events.subscribe((val)=>{

      this.router.params.subscribe(data =>{
         alert
         let  url = route.url
        if(url.match("wishlist") || url.match("checkout") || url.match("rewards")){
          this.filtered=false
        }else{
          this.filtered=true
        }
        this.ngOnInit()
       })
    })



    this.getCategoryProducts(this.category)
    this.filtered =false
    this.noProductsfound=true
    // this.ngOnInit()
  }
  
  product:any;
  groceries:any;
  electronics:any;
  personalCare:any;
  homeKitchen:any;
  allProducts:any;
  filter:boolean=false;
  prod_type:any;
  filtered:boolean;
  noProductsfound: boolean
  
  @Input() category:any;
  
  ngOnChanges():void{
    this.getCategoryProducts(this.category)
    console.log("dash", this.category)
  }
 
  
  ngOnInit(): void {
    // this.getHomeKitchen()
    // this.getElectronics()
    // this.getGroceries()
    // this.getPersonalCare()
    this.getCategoryProducts('all')
  }


  buyNow(item:any){
    this.filtered=false

    this._cart.addToCart(item);
    this.route.navigate(['checkout'])
  }


  addToWIshList(product:any){
    this._wish.addToWishList(product)
  }


  getHomeKitchen(){

    this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category=='homekitchen')))
    .subscribe(
      response =>{

        this.allProducts = response;
        console.log("Home Kitchen ", this.homeKitchen)
      })
  }
 

  getElectronics(){

    this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category=='electronics')))
    .subscribe(
      response =>{
        this.allProducts = response;
        console.log("Home Electronics ", this.electronics)
      }
      )
  }
 

  // getPersonalCare(){

  //   this._product.getProducts()
  //   .pipe(map(result=>result.filter(prod=>prod.category=='personalcare')))
  //   .subscribe(
  //     response =>{
  //       this.personalCare = response;
  //       console.log("Personal Care ", this.personalCare)
  //     }
  //     )
  // }


  getGroceries(){
   
    this._product.getProducts()
    .pipe(map(result=>result.filter(prod=>prod.category=='groceries')))
    .subscribe(
      response =>{
        this.allProducts = response;
        console.log("Groceries ", this.groceries)
      })
  }

  getAllProducts(){
    
   
    this._product.getProducts().subscribe(
      response =>{
        this.allProducts = response;
          this.noProductsfound=false
        })
      }
      
      getCategoryProducts(category:any){
        
        if (category=='all'){
          this.getAllProducts()
        }else{
          this.filtered=true;
          this._product.getProducts()
          .pipe(map(result=>result.filter(prod=>prod.sub_category==category)))
          .subscribe(
            response =>{
              this.allProducts = response;
              console.log("all prod ", this.allProducts)
        if(this.allProducts.length==0 ){
          this.noProductsfound=true
        }
      })

    }
  }


  addToWishList(item){
    this._wish.addToWishList(item);
  }

  addToCart(item){
    this._cart.addToCart(item);
  }



}
