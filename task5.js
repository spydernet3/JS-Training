// java script task 5 assigned at 17-08-2026 by Naveen //

/* Level 1 — Basics
Task 1: Student Details
Create variables for name, age, department, and cgpa.
Print them using console.log().
Use both normal concatenation and template literals.
 */

let Name;
let age;
let department;
let cgpa;

console.log("Normal Method:-",Name,age,department,cgpa);
console.log(`Template Method:-\nName ${Name}, Age ${age}, department${department}, cgpa ${cgpa}`);

//  ------------- TASK END-------------------- //

/* Task 2: Simple Calculator
Create variables a = 20 and b = 10.
Print:
Addition
Subtraction
Multiplication
Division
Modulus
Power
 */

let a = 20;
let b = 10;

console.log("Addition:-",a+b);
console.log("Subtraction:-",a-b);
console.log("Multiplication:-",a*b);
console.log("Division:-",a/b);
console.log("Modulus:-",a%b);
console.log("Power:-",a**b);


//  ------------- TASK END-------------------- //

/* Task 3: Age Checker
Take age using prompt().
18 or above → Eligible to vote
Below 18 → Not eligible
 */

let age = Number(prompt("Enter Your Age :-"));

if (age >= 18){
    alert("You can Vote Either TVK Or Something as Your wish");
    console.log(age);
    
}else{
    alert("Your Age is Not eligible");
    console.log(age);
}

//  ------------- TASK END-------------------- //

/* Level 2 — Conditions
Task 4: Student Grade
Take marks using prompt().
90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → Fail
Use if / else if / else.
 */

let Mark = Number(prompt("Enter Your Mark"));

if (Mark >= 90 && Mark <= 100){
        console.log("Grade A");
        
}else if (Mark >= 80 && Mark <= 89){
    console.log("Grade B");
    
}else if (Mark >= 70 && Mark <= 79){
    console.log("Grade C");
    
}else if (Mark >= 60 && Mark <= 69){
    console.log("Grade D");
    
}else if(Mark < 60){
    console.log("Fail");
    
}else{
    console.log("Please enter valid mark");
    
}

//  ------------- TASK END-------------------- //

/* Task 5: Login System
Create:
correctUsername = "admin"
correctPassword = "1234"
Ask the user for username and password.
Expected:
Both correct → Login successful
Username wrong → Invalid username
Password wrong → Invalid password
Both wrong → Invalid credentials
 */

let DefaultUserName = "Admin";
let DefaultUserPassword = "1234";

let UserUserName = prompt("Enter Your User Name:-");
let UserPassword = prompt("Enter Your Password:-");

if ( UserUserName != DefaultUserName && UserPassword != DefaultUserPassword){
            console.log("Invalid Credentials");  
        }

if (UserUserName == DefaultUserName){
    if (UserPassword == DefaultUserPassword){
        
        console.log("Login Successful");
        
    }else{
        console.log("Invalid Password");
        
    }
}else{
    console.log("Invalid User Name");
    
}

//  ------------- TASK END-------------------- //

/* Task 6: ATM Withdrawal
Create:
balance = 10000
Ask the user for withdrawal amount.
Check:
Amount must be greater than 0
Amount cannot exceed balance
Amount must be a multiple of ₹100
If valid, subtract it from balance
This is directly related to the ATM logic in your notes.
 */

let Balance = 10000;

let UserAmount = Number(prompt("Enter Your Number:-"))

if (UserAmount <= 0){
    alert("Please Enter Greater than 0")

}else if(UserAmount > Balance){
    alert("Insufficient Balance");
    
}else if (UserAmount % 100 !== 0 ){
    alert("Please enter multiple of 100 values");
    
}else{
    alert(`Withdrawal Successful and Your Remain Balance is ${Balance - UserAmount}`);
    
}

//  ------------- TASK END-------------------- //

/* Level 3 — Loops
Task 7: Multiplication Table
Take a number from the user.
For example:
Input: 7

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
Use a for loop.
 */

let user = Number(prompt("Enter the Number"));

for (let i = 1; i <= 10; i++){
    console.log(`${user} * ${i} = ${user * i}`);
    
}

//  ------------- TASK END-------------------- //

/* Task 8: Reverse Number
Input:
12345
Output:
54321
Use a loop.
 */

for (let i = 5; i >= 1; i--){
    console.log(i);
    
}

//  ------------- TASK END-------------------- //

/* Task 9: OTP System
Create:
correctOTP = 1234
Give the user maximum 3 attempts.
Correct → OTP verified
Wrong → Try again
3 wrong attempts → Account blocked
This builds directly on the OTP while-loop example in your notes.
 */

let Correct_OTP = 1234;
let User_Attempt = 1;

while(User_Attempt <= 3){
    let Enter_OTP = Number(prompt("Enter OTP"));
    console.log("OTP Is Validating....");
    
    if (Enter_OTP === Correct_OTP){
        alert("OTP Verified");
        break;
        
    }
    alert("Wrong OTP Try Again");
    User_Attempt++
    
}

(User_Attempt > 3) && alert("Account Blocked")

//  ------------- TASK END-------------------- //

/* Level 4 — Functions
Task 10: Salary Calculator
Create:
calculateSalary(basicSalary, bonus)
Return:
basicSalary + bonus
Example:
calculateSalary(30000, 5000)
→ 35000
 */

function CalculateSalary(BasicSalary,Bonus){
    return BasicSalary + Bonus
}
console.log("Your Salary And Bonus Is:-",CalculateSalary(30000,5000));

//  ------------- TASK END-------------------- //

/* Task 11: Calculator Function
Create separate functions:
add()
subtract()
multiply()
divide()
Then call them with different values.
 */

function add(a,b){
    return a+b;
}
console.log(add(1,1));

function sub(a,b){
    return a-b;
}
console.log(sub(2,2));

function mul(a,b){
    return a*b;
}
console.log(mul(1,3));

function div(a,b){
    return a/b;
}
console.log(div(4,2));

//  ------------- TASK END-------------------- //

/* Task 12: Eligibility Function
Create:
checkEligibility(age, height, weight)
Rules:
age >= 21
height >= 170
weight >= 70
If all conditions are satisfied:
Eligible
Otherwise:
Not eligible
 */

let age       = Number(prompt("Enter Your Age:-"));
let height    = Number(prompt("Enter Your Heigh:-"));
let weight    = Number(prompt("Enter Your Weight:-"));

if (age >= 21){
    if (height >= 170){
        if (weight >= 70){
            console.log("Your are Eligible");
            
        }else{
            console.log("Weight is not eligible");
            
        }
    }else{
        console.log("Height is not eligible");
        
    }
}else{
    console.log("Age is not eligible");
    
}

//  ------------- TASK END-------------------- //

/* Level 5 — Array Practice
Your notes cover methods such as push, pop, shift, unshift, splice, concat, slice, flat, includes, indexOf, sort, and reverse.
Task 13: Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];
Perform:
Add "Monitor"
Remove "Mouse"
Add "Headset" at the beginning
Remove the last item
Print final cart
Use only array methods.
 */

let cart = ["Laptop", "Mouse", "Keyboard"];

cart.unshift("Monitor")
cart.splice(2,1,)
cart.unshift("Headset")
cart.pop()

console.log(cart);

//  ------------- TASK END-------------------- //

/* Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];
Find the largest number.
*/

let numbers = [10, 45, 23, 89, 12, 67];

let largest = numbers.find((c,i,t) => {
    return c > 67;
})
console.log(largest);

//  ------------- TASK END-------------------- //

/*
Task 15: Remove Duplicate Values
Input:
[1, 2, 3, 2, 4, 1, 5]
Output:
[1, 2, 3, 4, 5]
 */

let Input = [1, 2, 3, 2, 4, 1, 5];

Input.splice(3,1)
Input.splice(4,1)

console.log(Input);

//  ------------- TASK END-------------------- //

/* Level 6 — Higher-Order Functions
Your notes specifically cover forEach, map, filter, find, reduce, some, and every.
Task 16: Employee Salary Filter
let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];
Using filter():
Find employees whose salary >= 40000
 */

let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
];

let employeefilter = employees.filter((c,i,t)=>{
    return c.salary >= 40000;
})
console.log(employeefilter);

//  ------------- TASK END-------------------- //

/* Task 17: Increase Salary
Using map():
salary < 40000 → increase by 5000
salary >= 40000 → increase by 10000
 */

let NewSalary = employees.map((c,i,t) => {
    if (c.salary < 40000){
        return c.salary + 5000;

    }else {
        c.salary >= 40000;
        return c.salary + 10000;
    }
});

console.log(NewSalary);

//  ------------- TASK END-------------------- //

/* Task 18: Total Salary
Using reduce():
Find the total salary of all employees.
 */

let Total_Salary = employees.reduce((acc,c,i,t) => {
    return acc + c.salary;
},0)

console.log(Total_Salary);

//  ------------- TASK END-------------------- //
