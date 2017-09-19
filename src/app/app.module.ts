import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';

import { SharedModule } from './shared/shared.module';
//import { CoreModule } from './core/core.module'; --> Obsoleto por causa da função forRot() do SharedModule.


@NgModule({
  declarations: [    
    RestaurantsDetailComponent,
    ShoppingCartComponent,
    RestaurantsComponent,
    OrderSumaryComponent,
    RestaurantComponent,
    MenuItemComponent,
    ReviewsComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    AppComponent    
  ],
  imports: [
    //CoreModule, --> Obsoleto por causa da função forRot() do SharedModule.
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
