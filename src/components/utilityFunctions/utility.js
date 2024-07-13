export function CalculateTotal(product){
     return product.map(product => product.price * product.available_quantity)
     .reduce((acc,price)=> acc + price,0)
}

