import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletsComponent } from './component/bracelets/bracelets.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EarringsComponent } from './component/earrings/earrings.component';
import { LoginComponent } from './component/login/login.component';
import { NecklacesComponent } from './component/necklaces/necklaces.component';
import { ProductComponent } from './component/product/product.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { RingsComponent } from './component/rings/rings.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'product/:id',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'rings',component:RingsComponent, canActivate:[AuthGuard]},
  {path:'necklaces',component:NecklacesComponent, canActivate:[AuthGuard]},
  {path:'bracelets',component:BraceletsComponent, canActivate:[AuthGuard]},
  {path:'earrings',component:EarringsComponent, canActivate:[AuthGuard]},
  {path:'checkout',component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'wishlist',component:WishlistComponent, canActivate:[AuthGuard]},
  {path:'rewards',component:RewardsComponent},


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
