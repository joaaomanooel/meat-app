import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from "rxjs/Observable";

import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>; 
  
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute){ }

  ngOnInit() {
    let restaurantId : string = this.route.parent.snapshot.params['id'];//parant pega da pagina "parente" ('pai') o parametro nesse caso
    this.menu = this.restaurantsService.menuOfRestaurant(restaurantId);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }
}
