function tubSon(number,sum){
    for(let i = 2; i < number; i++){
        for(let k = 2; k < i; k++){
            if(k % i == 0){
                sum = false;
                break;
            }
            else {
                console.log(k);
            }
        }
    
        // if(sum){
        //     console.log("Tub son");
        // }
        // else if(sum == false){
        //     console.log("Tub Son Emas");
        // }
    }
}

let num = 20;
let result = true;
tubSon(num,result);