function add(x, y){
    var z = (parseInt(x) + parseInt(y));
    return z;
}

function subtract(x, y){
    var z = x - y;
    return z;
}

function multiply(x, y){
    var z = x * y;
    return z;
}

function divide(x, y){
    var z = x / y;
    return z;
}

function calculate(action, x, y){
    var z;
    if (action == 'null') {
        return null;
    } else if (action == 'add'){
        z = add(x, y);
    } else if (action == 'sub'){
        z = subtract(x, y);
    } else if (action == 'mul'){
        z = multiply(x, y);
    } else if (action == 'div'){
        z = divide(x, y);
    }
    document.getElementById("result").value = z;
    //alert('The answer is ' + z);
    //return z;
}