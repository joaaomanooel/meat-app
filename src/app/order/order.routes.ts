import { Routes} from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

export const ROUTES: Routes = [
    {path: '', component: OrderComponent},
  ]