function adition(number1,number2){
    if(typeof(number1 && number2) !="number"){
        return "please valid number";
    }
    const total = number1+number2;
    return total
}

console.log(adition(11,41));
