import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletsComponent } from './component/bracelets/bracelets.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EarringsComponent } from './component/earrings/earrings.component';
import { NecklacesComponent } from './component/necklaces/necklaces.component';
import { ProductComponent } from './component/product/product.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { RingsComponent } from './component/rings/rings.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'rings',component:RingsComponent},
  {path:'necklaces',component:NecklacesComponent},
  {path:'bracelets',component:BraceletsComponent},
  {path:'earrings',component:EarringsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'rewards',component:RewardsComponent},


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
