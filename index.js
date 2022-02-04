// write a function pizza delivery.one is $10 price. you can only order pizza another product is not allow.you can order 1-20 pizza.20pizza over obder than show is out of stock on order 1-20 pizza.
function foodPunda(foodName, quntity){
    if(foodName.toLowerCase() !='pizza'){
        return 'just pizza delavary other product is no delivary';
    }
    if(quntity >10){
        return 'pizza 20 more than is not stock';
    }
    const price=quntity*10;
    return price;
}
console.log(foodPunda('pizza',10));