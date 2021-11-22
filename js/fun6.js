function tubSon(number,sum){
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            sum = false;
            break;
        }
    }

    if(sum){
        console.log("Tub son");
    }
    else if(sum == false){
        console.log("Tub Son Emas");
    }
}

let num = 1128;
let result = true;
tubSon(num,result);