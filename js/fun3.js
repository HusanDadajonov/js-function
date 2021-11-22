function mukammallSon(number,yigindi){
    for(let i = 0; i < number; i++){
        if(number % i == 0){
            yigindi += i;
        }
    }

    if(yigindi == number){
        console.log("Mukammal Son");
    }
    else{
        console.log("Mukammal Son Emas");
    }
}

let num = 29;
let sum = 0;
mukammallSon(num,sum);