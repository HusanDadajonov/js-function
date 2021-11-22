function boluvchilar(boluvchi,yigindi){
    for(let i = 0; i <= boluvchi; i++){
        if(boluvchi % i == 0){
            yigindi += i;
        }
    }
    return yigindi;
}

let num = 15;
let sum = 0;
console.log(boluvchilar(num,sum));