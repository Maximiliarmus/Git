function calculate(num1, operator, num2){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num2 !== 0 ? num1 / num2 : "Ошибка: Делить на 0 нельзя"
    }
    else if(operator === "^"){
        return Math.pow(num1, num2)
    }
    else if(operator === "sqrt"){
        return num1 >= 0 ? Math.sqrt(num1): "Ошибка: корень из отрицательного числа" 
    }
    else if(operator === "%"){
        return (num1 * (num2/100))
    }
    else{
        return "Недопустимый оператор"
    }
}

console.log(calculate(1, "+", 2));
console.log(calculate(1, "-", 2));
console.log(calculate(1, "*", 2));
console.log(calculate(3, "/", 2));
console.log(calculate(1, "^", 0));
console.log(calculate(1, "sqrt", 0));
console.log(calculate(10, "%", 20));
