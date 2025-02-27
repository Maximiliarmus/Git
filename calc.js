function performCalculation(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 = parseFloat(document.getElementById("num2").value);

    if(operator === "sqrt"){
        num2 === 0;
    }

    let result = calculate(num1, operator, num2);
        document.getElementById("result").innerText = "Результат: " + result;
}

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
