"use strict"; 

if (4 == 9) {
    console.log('Ok!');
} else {
   console.log('Error');
}

const num =50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Багато');
} else {
    console.log('Ok!');
}

const num = 50;
(num === 50) ? console.log('Ok!') :  console.log('Error');

const num = 50;
switch (num) {
   case 49:
       console.log('Неправда');
       break;
    case 100:
        console.log('Неправда');
        break;
    case 51:
        console.log('Ok!');
        break;
    default:
        console.log('Не цього разу');
        break;
}


let num = 50;


while (num < 55){
     console.log(num);
     num++;
}
let num = 50; 
do {
    console.log(num);
    num++;
}
while (num < 55);

let num = 50;

for (let i =1; i < 10; i++) {
    if (i ===6){
       continue;
    }
    console.log(i);
}