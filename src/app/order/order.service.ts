import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ShoppingCartService } from '../restaurants-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService{

    constructor(public cartService: ShoppingCartService, private http: Http){

    }

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    itemsValue(): number{
      return this.cartService.total();
    }

    increaseQty(item: CartItem){
      this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
      this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
      this.cartService.removeItem(item);
    }
    
    checkOrder(order: Order): Observable<Order>{
      const headers = new Headers();
      headers.append('Content-Type', 'Application/json');

      return this.http.post(`${MEAT_API}/orders`,
              JSON.stringify(order),
              new RequestOptions({headers: headers}))
          .map(response=> response.json()
        );
    }

    clear(){
      this.cartService.clear();
    }
}