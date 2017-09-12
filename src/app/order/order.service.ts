import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurants-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService{

    constructor(public cartService: ShoppingCartService ){

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
}