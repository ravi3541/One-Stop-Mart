import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalCareComponent } from './component/personalCare/personalCare.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeKitchenComponent } from './component/homeKitchen/homeKitchen.component';
import { LoginComponent } from './component/login/login.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { ProductComponent } from './component/product/product.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { GroceriesComponent } from './component/groceries/groceries.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'product/:id',component:ProductComponent,canActivate:[AuthGuard]},
  {path:'rings',component:GroceriesComponent, canActivate:[AuthGuard]},
  {path:'necklaces',component:ElectronicsComponent, canActivate:[AuthGuard]},
  {path:'bracelets',component:PersonalCareComponent, canActivate:[AuthGuard]},
  {path:'earrings',component:HomeKitchenComponent, canActivate:[AuthGuard]},
  {path:'checkout',component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'wishlist',component:WishlistComponent, canActivate:[AuthGuard]},
  {path:'rewards',component:RewardsComponent},


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
