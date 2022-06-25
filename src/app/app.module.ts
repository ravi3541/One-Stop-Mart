import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './Pipe/filter.pipe';
import { RingsComponent } from './component/rings/rings.component';
import { NecklacesComponent } from './component/necklaces/necklaces.component';
import { BraceletsComponent } from './component/bracelets/bracelets.component';
import { EarringsComponent } from './component/earrings/earrings.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { RewardsComponent } from './component/rewards/rewards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductComponent,
    CartComponent,
    FilterPipe,
    RingsComponent,
    NecklacesComponent,
    BraceletsComponent,
    EarringsComponent,
    CheckoutComponent,
    WishlistComponent,
    RewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
