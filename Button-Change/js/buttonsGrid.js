function rotate(){
    let numbers = [1,2,3,6,9,8,7,4,1];
    for(let i = 0; i < numbers.length - 1; i++){
        let btn1 = "btn" + numbers[i].toString();
        let btn2 = "btn" + numbers[i+1].toString();
        let aux = document.getElementById(btn1).innerText;
        document.getElementById(btn2).innerHTML = aux;
    }
}