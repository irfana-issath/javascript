// const read = require("readline-sync");
// -----------------------02-09-25--------------------------------
// function with argument with return value

function sum(num1,num2) {
    return num1+num2;
}

console.log(sum(50,20))


// function without argument with return value
function multiple() {
    let a=5
    let b=2
    const res=a*b
    return res

}

console.log(multiple())


// function with argument without return value
function sub(num1,num2) {
    let res=num1-num2
    console.log(res)
}

sub(100,20)


// function without argument without return value
function fun(){
    console.log("hello")
}

fun()



// ---------------------09-09-25--------------------------------

//-------------------anonymous function---------------

// (function(){
// console.log("it's anonymous function");
// })()

// -------------------immediately invoked function-------------------


// -------------------function expretion-------------------------
let func= (function(){
    console.log("it's anonymous function");
}
)
func()

// -------------------arrow function-----------------

const arrowFun=()=>console.log("it's arrow function");
arrowFun()


// ------------------callback function-------------

const newSum=(num1,num2,callback)=>{
    res=num1+num2
    callback(res)

}

const sample=(result)=>{
console.log(`resilt is ${result}`);
}
newSum(10,3,sample)


// ------------------higher order function----------------

function sampleFn(){
    return function(){
        console.log("return another fn");
    }
}

sampleFn()()


// ----------------if-------------------
// const age=25;
// if(age<30){
//       console.log("you are yung");
// }

// const isTrue= true
// if(isTrue===true){
//     console.log("hey izza");
    
// }

// ------------------- if else--------------------

const newAge=45;
if(newAge<30){
      console.log("if exicuted");
}else{
    console.log("else exicuted");
}

// -----------------------if else lader---------------

const mark=70;
if(mark<=40){
    console.log("failed");
}else if(mark<=50){
     console.log("C");
     
} else if(mark<=60){
     console.log("C+");
     
}else if(mark<=70){
     console.log("B");
     
}else if(mark<=80){
     console.log("B+");
     
}else if(mark<=90){
     console.log("A");
     
}else if(mark<=100){
     console.log("A+");
     
}else{
    console.log("invalid");
    
}

// ----------------------------switch---------------

const color="red";
switch (color) {
    case "white":
        console.log("its a jasmin");
        break;
    case "yellow":
        console.log("its a sun flower");
        break;    
    case "red":
        console.log("its a rose");
        break;
    case "green":
        console.log("its a leef");
        break;    
    default:
        console.log("invalid input");
        
}

// ----------------ternary operator------------------

const newMark=40
newMark<40 ? console.log("failed") : newMark<50 ? console.log("C") : newMark<60 ? console.log("C+"): newMark<70 ? console.log("B") : newMark<80 ? console.log("B+") : newMark<90 ? console.log("A") : newMark<=100 ? console.log("A+") : console.log("invalid input");

// const age = read.questionInt("please enter your age");
// read.question();
// read.questionFloat()
// console.log("age------>", age);


// ---------------------13.09.2025---------------------------------

// ------------------for loop----------------------

console.log("Before loop---------->");

for( i = 1 ; i <= 5 ; i++){
    console.log(`looping numbers: ${i}`);
    
}

console.log("loop finihed----------->");


// -------------------Nested loop--------------------------

console.log("Nested loop started------------>");


for( i = 1 ; i < 5 ; i++){
   for( j = 1 ; j <= 5 ; j++){
     console.log(`looping row: ${i} looping column: ${j}`);
   }
    console.log("Exit from j loop-------->");
    
}

console.log("Nested loop finished------------>");


// -------------------output in one row--------------------

console.log("output in one line started--------->");

for(i = 1; i < 2; i++){
     let str = ``;
    for(j = 1; j <= 5; j++){
        str += j + ` `;
    }
    console.log(str);
}

console.log("output in one line started--------->");




// ----------------------16.09.2025-------------------------------

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

for(let i = 1; i < 5; i++){
    let str = "";
    for(let j = 1; j <= 5; j++){
        str += j + " ";
        
    }
    console.log(str);

}




// ------------------------------------------------------------------------


// *
// * *
// * * *
// * * * *
// * * * * *
for(let i = 1; i <= 5; i++){
    let str="";
    for(let j = 1; j <= i ; j++){
        str+= "*" + " " ;
    }
    console.log(str);
}

// --------------------------------------------------------------

//         *  5 - 1 = 4
//       * *  5 - 2 = 3
//     * * *  5 - 3 = 2
//   * * * *
// * * * * *
console.log("kj------------------>");

// for(let i = 1 ; i <= 5 ; i++){
//     let str = "";
//     for( let j = 1 ; j <= 5 ; j++){
//         if(j > 5 - i ){
//             str += "*" + " ";
//         }else{
//             console.log(" ");
//         }
//     }
//     console.log(str);
    
// }

// --------------------------------------------------------
    //         *  
    //       * * * 
    //     * * * * *
    //   * * * * * * *
    // * * * * * * * * *


// --------------not completed--------------

//---------------------------array---------------------------------- 

console.log("----arr----arr----arr----arr---->");


let arr=[10,20,30,40];
console.log(arr);

let ar = ["izza", "zaad", "izzaad"];



// ---------------------------18.09.25---------------------------------

// ------------------------find methord-------------------------------

let arra=[10,20,30,40];
const resul = arra.find((num) => num > 20)

console.log(resul);


// -----------------------filter methord-------------------------------

let filt = arra.filter((element) => element > 20)

console.log(filt);


// -----------------------findIntex--------------------------------------

let finInt = arra.findIndex((element) => element > 20)

console.log(finInt);

// -----------------------indexOf------------------------------------------------


let finIndof = arra.indexOf(20)

console.log(finIndof);

// ------------------------reduce------------------------------------------------

let red = arra.reduce((acc, element) => acc + element )

console.log(red);

// ------------------------every-----------------------------------------------

let  eve= arra.every((element) => element > 0)

console.log(eve);

// ------------------------some----------------------------------------------------

let sm = arra.some((element) => element > 60)

console.log(sm);

// ------------------------slice----------------------------------------------

let array1=[100,200,300,400]
let sls = array1.slice(2)

console.log(sls);

// ------------------------splice-------------------------------------------

let spl = array1.splice(0,1000,2000)
console.log("-------"+array1);


console.log(spl);


// ----------------------not completed-----------------
// --------------------------------------------------------------------------






