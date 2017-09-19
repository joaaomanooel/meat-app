import { Routes } from '@angular/router';

import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { OrderSumaryComponent} from './order-sumary/order-sumary.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order-sumary', component: OrderSumaryComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurants/:id', component: RestaurantsDetailComponent,
    children: [
      {path: '', component: MenuComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  }
]
