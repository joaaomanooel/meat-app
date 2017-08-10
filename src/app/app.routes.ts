import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantsDetailComponent,
    children: [
      {path: '', component: MenuComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  }
]
