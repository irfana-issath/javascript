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

    // ------------array methodes-----------------------------
    // --------------------1----------------------------------

    let array2 = [10,11,12,13,14,15];


    let doubleNumbers = array2.map((ele) => ele + ele)
    console.log("Double Numbers------->" + doubleNumbers);

    // ---------------------2----------------------------------------

    let filterEvenNumbers = array2.filter((arrNum) => arrNum % 2 == 0)
    
    console.log("Even Nums------->" + filterEvenNumbers);
    
    // ---------------------3---------------------------------------------

    let sumArray = array2.reduce((acc,arrNum)=>acc += arrNum,0);

    console.log("Sum of array------->" + sumArray);
    
    // ---------------------4------------------------------------------------

    let oddNums = array2.filter((arrNum) => arrNum % 2 == !0)
    let findFirstOdd = oddNums.at(0)

    console.log(findFirstOdd);

    // -----------------------array object----------------------------------------------------- 
    let users = [
        {
            fullname : "tom",
            age : 16,
            isActive : true ,
            course : {
                name : "MERN" ,
                duration : " 6 months" ,
            }
        },
        {
            fullname : "Jerry",
            age : 25,
            isActive : false ,
            course : {
                name : "Python" ,
                duration : " 4 months" ,
            }
        },
        {
            fullname : "John",
            age : 22,
            isActive : true ,
            course : {
                name : "MERN" ,
                duration : " 6 months" ,
            }
        },
        {
            fullname : "Ravi",
            age : 23,
            isActive : true ,
            course : {
                name : "Python" ,
                duration : " 4 months" ,
            }
        }

    ];

    // ----------------------1-------------------------------------------------------------------

    let activeUsers = users.filter((ele)=>ele.isActive==true)
     console.log(activeUsers);

    //  ---------------------2---------------------------------------------------------------------

    let ageGreater = users.filter((ele)=>ele.age > 20 )
    console.log(ageGreater);
    
    // ----------------------3----------------------------------------------------------------------

    let mern = activeUsers.filter((ele) => ele.course.name == "MERN")
     console.log(mern);

    //  ---------------------4-----------------------------------------------------------------------

     let python = users.filter((ele) => ele.course.name == "Python");
     let nameAndDuration = python.map((ele)=>({
        fullname : ele.fullname,
        duration : ele.course.duration
     }))
     console.log(nameAndDuration);

    //  ------------------array of objects-----------------------------------------------------

    let accounts = [
        {
            acno: 1000, ac_type: "savings", balance: 5000,
        transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" }, 
            { to: 1003, amount: 100, note: "erchrge", method:"phone-pay" }
            ]
        },
        {
            acno: 1001, ac_type: "savings", balance: 6000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" }, 
            { to: 1003, amount: 100, note: "erchrge", method:"phone-pay" }
            ]
        },
        {
            acno: 1002, ac_type: "current", balance: 8000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: " phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" }, 
            { to: 1003, amount: 100, note: "erchrge", method:"phone-pay" }
            ]
        },
        {
            acno: 1003, ac_type: "current", balance: 16000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: " phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" }, 
            { to: 1001, amount: 100, note: "erchrge", method:"phone-pay"}
            ]
        },
    ];

    // ------------------------1----------------------------------------------------------

    console.log("Total Accounts: "+ accounts.length);
    // ------------------------2------------------------------------------------------------

    let sevingsAcc = accounts.filter((ele) => ele.ac_type == "savings");
    console.log(sevingsAcc);
    // ------------------------3----------------------------------------------------------------

    let the1000Acc = accounts.filter((ele) => ele.acno == 1000)

    let theBalance = the1000Acc.map((ele) => ele.balance);
    console.log(theBalance);

    // -------------------------4---------not completede-------------------------------------------------------

    let tran = accounts.filter((ele) => ele.transactions);
    let gPayTrans = tran.filter((ele) => ele.method == "g-pay")
    console.log(tran);
    // --------------------------5---------------------------------------------------------------------

    // let the1002Acc = accounts.filter((ele) => ele.acno == 1002);
    let trans = accounts.map((ele) => ele.transactions)
    let transTo1002 = trans.filter((ele) => ele.to == 1002)

    console.log(transTo1002);

    // --------------------------6---------------------------------------------------------------------

    let maxim = accounts.reduce((acc,ele) => acc.balance < ele.balance ? ele : acc )
    console.log(maxim);

    // ---------------------------------------------------------------------------------------------------------------

    var mobiles=[
        [1000,"samsung", "samsungf41", 15000, "snapdragon", "AMOLED", "4g"],
        [1001,"samsung", "samsungA51", 32000, "snapdragon", "AMOLED", "5g"],
        [1002, "redmi","not 10 pro", 19000,"snapdragon", "LED", "4g"],
        [1003, "redmi","mi 11 lite",30000,"mediatek", "LED", "4g"],
        [1004, "apple", "12pro", 72000, "snapdragon", "AMOLED", "4g"],
        [1005, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5g"],
        [1006, "one plus","nord2", 29000,"snapdragon", "AMOLED", "4g"],
        [1007,"one plus", "nord 2", 15000,"mediatek", "LED", "4g"]
        ]
    
        // -------------------------1-----------------------------------------------------------------------------------
        let phnNames = mobiles.map((ele) => ele[1]);
        console.log(phnNames);
        // ------------------------2-----------------------------------------------------------------------------------------

        let mobilePrices = mobiles.map((ele) => ele[3])
        console.log(mobilePrices);
        // -----------------------3-------------------------------------------------------------------------------------------

        let onlySam = mobiles.filter((ele) => ele[1] == "samsung");
        console.log(onlySam);
        // -----------------------4----------------------------------------------------------------------------------------------
        
        let phnBlw = mobilePrices.reduce((acc,ele) => acc < ele ? ele : acc)
        console.log(phnBlw);
        // -----------------------5----------------------------------------------------------------------------------------------

        let priceRange = mobiles.filter((ele) => ele[3] >= 25000 && ele[3] <= 30000)
        console.log(priceRange);
        // -----------------------6-----------------------------------------------------------------------------------------------

        let fiveG = mobiles.filter((ele) => ele[6] == "5g").map((ele) => ele[1])
        console.log(fiveG);
        //------------------------7------------------------------------------------------------------------------------------------

         let fiveGrm = mobiles.filter((ele) => ele[6] == "5g" && ele[3] < 35000)
        console.log(fiveGrm);
        // -------------------------8----------------------------------------------------------------------------------------------
        let samSung = mobiles.filter((ele) => ele[1] == "samsung" && ele[6] == "4g" && ele[5] == "AMOLED")
        console.log(samSung);


        // ------------------------25-09-25-----------------------------------------
        console.log("------------> 25-09-25 <-----------");
        
        // 1. You have a cart, each item has price, quantity, and maybe a discount.
        //    You need the total bill.

           const cart = [
             { name: "Laptop", price: 50000, quantity: 1, discount: 0.1 },
             { name: "Phone", price: 20000, quantity: 2, discount: 0 },   
             { name: "Headphones", price: 2000, quantity: 3, discount: 0.05 }
           ];

        let totalBill = cart.reduce((total,item)=>{
            let discount = item.discount ?? 0 ;
            return total + item.price * (1 - discount) * item.quantity;
        },0)

        console.log("Total: "+totalBill);
        

        // 2. Students have multiple subjects. You need to calculate average marks, and decide pass/fail.

          const students = [
            { name: "Arun", marks: [80, 75, 90] },
            { name: "Meera", marks: [30, 40, 35] },
            { name: "Kiran", marks: [60, 55, 70] }
          ];

        //   function averageMark(marks){
        //     let totalM =0;
        //     //  for(let i = 0 ; i < marks.length ; i++){
        //     //     totalM += marks[i];
        //     // }
        //     return totalM / marks.length;
        //   }
        //   console.log(averageMark());
          

         
        //   let averageMark = students.reduce((std)=>{
        //     for(let i = 0 ; i < marks.length ; i++){
        //         totalM = (marks[i] + marks[i])/marks.length;
        //     }
        //     return totalM
        
        //   },0)



        // 3. A company wants:
        //    Average salary
        //    Highest paid employee
        //    Employees earning more than 50k.

          const employees = [
            { name: "John", salary: 60000 },
            { name: "Anna", salary: 45000 },
            { name: "Ravi", salary: 75000 },
            { name: "Sara", salary: 50000 }
          ];

          



        // 4. You have reviews for movies, need to calculate average rating per movie, and sort them by rating.

        //   const reviews = [
        //     { movie: "Inception", rating: 5 },
        //     { movie: "Inception", rating: 4 },
        //     { movie: "Interstellar", rating: 5 },
        //     { movie: "Interstellar", rating: 4 },
        //     { movie: "Dunkirk", rating: 3 }
        //   ];


        // 5. Each employee has attendance & feedback scores. You need to:

        //   Check if all employees have 75%+ attendance.
        //   Find employees with average feedback < 3 (need training).

        //   const employees = [
        //     { name: "Raj", attendance: 80, feedback: [4, 5, 3] },
        //     { name: "Anu", attendance: 70, feedback: [2, 3, 2] },
        //     { name: "Sam", attendance: 90, feedback: [5, 4, 4] }
        //   ];


        // 6. From transactions, detect:

        //    Total spent
        //    Transactions > 10,000
        //    Suspicious: Same user making more than 3 transactions > 5000

        //    const transactions = [
        //      { user: "A", amount: 12000 },
        //      { user: "B", amount: 3000 },
        //      { user: "A", amount: 6000 },
        //      { user: "A", amount: 7000 },
        //      { user: "A", amount: 8000 },
        //      { user: "C", amount: 2000 }
        //    ];

        

        
        function sample(){
           
            
        }

        sample()
        

         let x = 1;
            let yi = 20;

            if(x < y){
                console.log("------>",x);
            }



    
        




    // ---------------------------------------------------------------

     // const age = read.questionInt("for number");
        // read.question(for string);  
        // read.questionFloat(for desimal numbers)
        // console.log("age------>", age);
    //----------------------------------------------------------
    
