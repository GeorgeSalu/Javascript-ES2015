function somar(x1, x2) {
    return x1 + x2;
}

let resultado = somar(1,2);
//console.log(resultado);

//eval
function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado2 = calc(1, 2, "+");
console.log(resultado2);

//arrow function 
let calc2 = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}