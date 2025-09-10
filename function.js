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

(function(){
console.log("it's anonymous function");
})()

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

