// const read = require("readline-sync");
// task----------02-09-25----------task
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



         // task------------09-09-25------------task
    
   // --------------------1------------------------
    let num=5;
    for(let i=1;i<=10;i++){
        let result=i*num;
        console.log(`${i} * ${num} = ${result}`);
    }

    // -------------------2--------------------------

    // let limit=10;
   
    let oddNum=(limit)=>{
        let sum = 0;
     for(let i = 1; i <= limit; i++){
        if(i % 2 == 1){
            sum += i;  
             
        }
    }
    console.log(sum);
   }
   oddNum(10)

   //-----------------------3---------------------------------

   let sub1 = 85;
   let sub2 = 90;
    
   sub1>sub2 ? console.log("subject1 is greater than subject2") : console.log("subject2 is greater than subject1");


    //----------------------4----------------------------------
    
    let item1 = 20;
    let item2 = 25;
    item1 < item2 ? console.log("the price of item1 is less than the price of item2") : console.log("the price of item2 is less than the price of item1")
    
   
       
    
    // -------------------------5--------------------------------

    // let johnsAge = read.questionInt("Enter john's age ");
    // let friendsAge = read.questionInt("Enter friend's age ");
    // johnsAge === friendsAge ? console.log("yes"): console.log("no");     
 
    // // -------------------------6--------------------------------

    let numm= 1;
    switch(numm){
        case 1: 
           console.log("Sunday");
           break;
        case 2: 
           console.log("Monday");
           break;
        case 3:
            console.log("Tuesday");
            break; 
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("invalid input");
    }


    // -----------------------7----------------------------

    // let totalMark=read.questionInt("Enter your mark ");
    let totalMark=70

    if(totalMark < 50){
        console.log("You are failed");
    } else if(50 >= totalMark || totalMark < 60){
        console.log("E");
    }else if(60 >= totalMark || totalMark < 70){
        console.log("D");
    }else if(70 >= totalMark || totalMark < 80){
        console.log("C");
    }else if(80 >= totalMark || totalMark < 90){
        console.log("B");
    } else if(90 >= totalMark || totalMark <= 100){
        console.log("A");
    }else{
        console.log("invalid output")
    }

    // ----------------------------------------------------------

    // ----------------------function with argument----------------

    function greating (name){
        console.log(`hello ${name}`);
    }

    greating("izza")

    // --------Do an example for hoisting with function-----------

    console.log(sum(20,30));
    
    function sum(num1,num2){
        return num1+num2
    }

    // ---------Do an example for hoisting with variable-------------
    
    console.log(x);
    // console.log(y);
    // console.log(z);
    
    var x = 500;
    let y = 200;
    console.log(x);
    console.log(y);
    const z = 1000;
    console.log(z);

    // ---------

     
    
        




    // ---------------------------------------------------------------

     // const age = read.questionInt("for number");
        // read.question(for string);  
        // read.questionFloat(for desimal numbers)
        // console.log("age------>", age);
    //----------------------------------------------------------
    
