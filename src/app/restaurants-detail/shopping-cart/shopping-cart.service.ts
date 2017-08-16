import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService{
    items: CartItem[] = [];

    clear(){
        this.items = [];
    }

    addItem(item: MenuItem){
        let foudItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        if(foudItem){
            this.increaseQty(foudItem);
        }else{
            this.items.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem){
      item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem){
      item.quantity = item.quantity - 1;
      if (item.quantity === 0 ){
          this.removeItem(item);
      }
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number{
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}