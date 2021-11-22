function mukammallSon(number,yigindi){
    for(let i = 0; i < number; i++){
        for(let j = 0; j < i; j++){
            if(i % j == 0){
                yigindi += j;
            }
        }
        console.log(yigindi);
    
        if(yigindi == i){
            console.log(yigindi);
        }
    }
}

let num = 29;
let sum = 0;
mukammallSon(num,sum);