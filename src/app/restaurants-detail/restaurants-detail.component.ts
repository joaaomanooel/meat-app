import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute ) {

  }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']; 
    this.restaurantsService.restaurantById(id).subscribe(restaurant => this.restaurant = restaurant);
  }

}
