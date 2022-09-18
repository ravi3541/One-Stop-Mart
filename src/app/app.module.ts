import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './Pipe/filter.pipe';
import { GroceriesComponent } from './component/groceries/groceries.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { PersonalCareComponent } from './component/personalCare/personalCare.component';
import { HomeKitchenComponent } from './component/homeKitchen/homeKitchen.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { InterceptorService } from './service/interceptor.service';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductComponent,
    CartComponent,
    FilterPipe,
    GroceriesComponent,
    ElectronicsComponent,
    PersonalCareComponent,
    HomeKitchenComponent,
    CheckoutComponent,
    WishlistComponent,
    RewardsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    CheckoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
