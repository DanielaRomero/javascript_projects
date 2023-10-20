let operator1 = 0;
let operator2 = 0;
let operand = '';
// When C is clicked, it cleans the res div
function empty(){
    document.getElementById('res').innerHTML = '';
}

// Adds 1 or 0 when clicked 1 or 0 button
function addOne(){
    document.getElementById('res').innerHTML +='1';
}
function addZero(){
    document.getElementById('res').innerHTML +='0';
}

function sum(){
    //Takes the first operator and the operand
    operator1 = document.getElementById('res').innerHTML;
    operand = '+';
    // Add '+' to the res div
    document.getElementById('res').innerHTML +='+';
}

function sub(){
    //Takes the first operator and the operand
    operator1 = document.getElementById('res').innerHTML;
    operand = '-';
    // Add '-' to the res div
    document.getElementById('res').innerHTML +='-';
}

function mul(){
    //Takes the first operator and the operand
    operator1 = document.getElementById('res').innerHTML;
    operand = '*';
    // Add '*' to the res div
    document.getElementById('res').innerHTML +='*';
}

function div(){
    //Takes the first operator and the operand
    operator1 = document.getElementById('res').innerHTML;
    operand = '/';
    // Add '/' to the res div
    document.getElementById('res').innerHTML +='/';
}

function eql(){
    // Reduce the string to the second operator
    let str = document.getElementById('res').innerHTML;
    operator2 = str.replace(operator1+operand,'');
    // Transforms the operators to base 10
    operator1 = parseInt(operator1, 2);
    operator2 = parseInt(operator2, 2);
    // Creates a string with the operators in base 10
    let expression = operator1 + operand + operator2;
    // Resolves the operation
    let result = eval(expression);
    // Transform the result to base 2 and is integer division only
    document.getElementById('res').innerHTML = Math.floor(result.toString(2));
}
document.getElementById('btnSum').onclick = sum;
document.getElementById('btnSub').onclick = sub;
document.getElementById('btnMul').onclick = mul;
document.getElementById('btnDiv').onclick = div;
document.getElementById('btnEql').onclick = eql;