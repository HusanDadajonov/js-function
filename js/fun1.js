function boluvchilar(boluvchi){
    for(let i = 0; i <= boluvchi; i++){
        if(boluvchi % i == 0){
            console.log(i);
        }
    }
}

let num = 30;
boluvchilar(num);