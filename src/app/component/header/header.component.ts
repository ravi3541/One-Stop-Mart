import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartCount:number=0;
  public wishCount:number=0;
  category:any;
  hideproducts:boolean=true;

  constructor(private _cart:CartService,private _wish:WishlistService,private router:Router, private route:ActivatedRoute) {
    router.events.subscribe((val)=>{

      this.route.params.subscribe(data =>{
         let id = data['id']
         let  url = router.url
        if(url.match("product")){
          this.hideproducts=false
        }else{
          this.hideproducts=true
        }
        this.ngOnInit()
       })
    })
  }

  ngOnInit(): void {


    this._cart.getjewellery().subscribe(response=>{
      this.cartCount=response.length; 
    })


    this._wish.getWishList().subscribe(response=>{
      this.wishCount=response.length; 
    })

  }


  removeAllItems(){
    this._cart.emptyCart();
    this.router.navigate(['dashboard'])
  }

  getProducts(category:any){
    this.router.navigate(["dashboard"])
    this.category = category
    console.log("----") 

  }

}
