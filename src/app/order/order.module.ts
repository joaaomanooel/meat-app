import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ROUTES } from './order.routes';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';


@NgModule({
    declarations:[
        OrderComponent,
        OrderItemsComponent,
        DeliveryCostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})

export class OrderModule{}