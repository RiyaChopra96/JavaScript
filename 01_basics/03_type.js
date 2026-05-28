let score="abc"
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN

//null=> 0
//undefined=>NaN

let isLoggedIn=0

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//""=>false
//"any"=>true

let num=22

let strNum=String(num)
console.log(strNum);
console.log(typeof strNum);

console.log((8*5-5)%2);

console.log(+true);//1

let num1,num2,num3

num1=num2=num3=4-4
console.log(num1)

let a=20
++a-(--a)
console.log(a);//21-1=20

console.log(null==0);
console.log(null>=0);
console.log(null>0);


console.log(undefined==null);

const id=Symbol('123')
const idd=Symbol('123')

console.log(id===idd);