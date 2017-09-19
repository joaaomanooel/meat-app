import { NgModule } from '@angular/core';

import { OrderService } from '../order/order.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppingCartService } from '../restaurants-detail/shopping-cart/shopping-cart.service';

@NgModule({
    providers: [
        OrderService,
        RestaurantsService,
        ShoppingCartService
    ]
})
export class CoreModule{

}