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

// task
//  --------------------1-------------------------------------
function greet(name) {
    return `Hello ${name}`
}
console.log(greet("izza"))


// ---------------------2-------------------------------------------
function sum(a,b){
    return a+b
}
console.log(sum(10,5));

// ---------------------3-----------------------------------------
function max(a,b){
    let res= a>b? a : b;
    return res
}
console.log(max(10,50));

// ---------------------4----------------------------------

function isEven(num){
     return num%2==0
}

console.log(isEven(6));


// --------------------5-----------------------------------------

function findLargest(arr){

    let maxNum = 0 ;  // 50

    for(i=0;i<arr.length;i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
      return maxNum
}
console.log(findLargest([20,40,50,30]));
