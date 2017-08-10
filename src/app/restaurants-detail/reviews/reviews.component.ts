import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { RestaurantsService } from '../../restaurants/restaurants.service';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})

export class ReviewsComponent implements OnInit {

  reviews: Observable<any>; 
  
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute){ }

  ngOnInit() {
    let restaurantId : string = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantsService.reviwsOfRestaurant(restaurantId);
  }
}
