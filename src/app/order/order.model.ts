class Order{
    constructor(public address: string, public number: number, public optionalAddress: string,
                     public paymantOption: string, public OrderItems: OrderItem[] = []){

    }
}

class OrderItem{
    constructor(public quantity: number, public menuId: string){
    }
}

export{ Order, OrderItem}