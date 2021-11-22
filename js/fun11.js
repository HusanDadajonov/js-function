function biggestNumber(num1,num2,num3,num4,x){
    if(num1 > num2 && num1 > num3 && num1 > num4){
        x = num1;
        return `x = ${x}`;
    }
    else if(num2 > num1 && num2 > num3 && num2 > num4){
        x = num2;
        return `x = ${x}`;
    }
    else if(num3 > num1 && num3 > num2 && num3 > num4){
        x = num3;
        return `x = ${x}`;
    }
    else if(num4 > num1 && num4 > num3 && num4 > num2){
        x = num4;
        return `x = ${x}`;
    }
}

function smallNUmber(num1,num2,num3,num4,y){
    if(num1 < num2 && num1 < num3 && num1 < num4){
        y = num1;
        return `Y = ${y}`;
    }
    else if(num2 < num1 && num2 < num3 && num2 < num4){
        y = num2;
        return `Y = ${y}`;
    }
    else if(num3 < num1 && num3 < num2 && num3 < num4){
        y = num3;
        return `Y = ${y}`;
    }
    else if(num4 < num1 && num4 < num3 && num4 < num2){
        y = num4;
        return `Y = ${y}`;
    }
}

let a = 40;
let b = 10;
let c = 23;
let d = 90;
let x = 0;
let y = 0;

console.log(`${biggestNumber(a,b,c,d,x)}
${smallNUmber(a,b,c,d,y)}`);
