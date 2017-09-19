import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

import { OrderService } from '../order/order.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppingCartService } from '../restaurants-detail/shopping-cart/shopping-cart.service';

@NgModule({
    declarations:[
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [
                OrderService,
                RestaurantsService,
                ShoppingCartService
            ]
        }
    }
}