import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
