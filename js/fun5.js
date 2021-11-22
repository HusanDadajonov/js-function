function uchgaBolinadiganlar(number) {
    for(let i = 1; i <= number; i++){
        if(i % 5 == 0){
            continue;
        }
        else if(i % 3 == 0){
            console.log(i);
        }
        
    }
}

let num = 30;
uchgaBolinadiganlar(num);