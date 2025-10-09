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



// closure

function prntFunc(){
    let x = 10;
    function childFunc(){
        let y = 20;
        let res = x + y;
        console.log("result : "+ res);
    }
    childFunc()
}

prntFunc()


