// java script task2 assigned at 12-08-2026 by Naveen //

/* Task 1 — Employee Eligibility
Use prompt() to get:
Employee name
Age
Experience
Salary
Rules:
Age >= 21
Experience >= 1 year
Salary >= 20,000
If all are true, print:
Employee is eligible
Otherwise, print the exact reason why they are not eligible.
Topics: variables, prompt, comparison, logical operators, if-else.
 */

let Eligibility = prompt("Employee Name");
let Age         = prompt("Enter Your Age in numbers");
let Experience  = prompt("Enter your experience in numbers");
let Salary      = prompt("Enter Your Salary in Numbers");

if (Age >= 21){
    if (Experience >= 1){
        if (Salary >= 20000){
            console.log("Your Eligible");
            
        }else{
            console.log("Your Salary is not eligible because it's lessthen 20000");
            
        }
    }else{
        console.log("Sorry Your Experience is lessthen 1 years so not eligible");
        
    }
    
}else{
    console.log("Sorry Your age is lessthen 21 years so You are not eligible ");
    
}

//  ------------- TASK END-------------------- //

/* Task 2 — ATM Withdrawal
Create an ATM program.
Current balance = 10000
Ask the user:
Enter withdrawal amount:
Rules:
Amount must be greater than 0
Amount must be <= balance
Withdrawal amount should be a multiple of 100
Example:
Balance: ₹10000
Withdraw: ₹2500

Output:
Withdrawal successful
Remaining balance: ₹7500
Topics: operators, if-else, logical operators.
 */

let current_balance = 10000;
let User            = prompt("Enter Your Withdrawal amount:-");

if (User <= current_balance && User > 0 && User % 100 == 0){
    console.log(`Withdrawal Successful, Remaining Balance is ${current_balance - User}`);
    
}else{
    console.log("Withdrawal failed");
    
}

//  ------------- TASK END-------------------- //

/* Task 3 — Login System with 3 Attempts
Create:
correctUsername = "admin"
correctPassword = "12345"
Ask the user for username and password.
Give the user maximum 3 attempts.
Example:
Attempt 1 → wrong
Attempt 2 → wrong
Attempt 3 → correct

Output:
Login successful
If all 3 attempts fail:
Account locked
Topics: while, if-else, break, variables. Your notes already use a similar OTP-attempt pattern.
 */

let DefaultUserName = "admin";
let DefaultPassword = "12345";
let attempt         = 1;

while(attempt <= 3){
    let Username  = prompt("Enter User Name:-");
    let Password  = prompt("Enter Password:-");

    console.log("Checking Credentials:-");

    if(Username === DefaultUserName && Password === DefaultPassword){
            console.log("Login Successful");
            break;
        }
        
        alert("Incorrect user name or password");

    if (attempt === 3){
        console.log("Login Failed! Account Locked");
    }
        attempt++
    
}

//  ------------- TASK END-------------------- //

/* Task 4 — Student Grade System
Ask for marks of 5 subjects.
Calculate:
Total
Average
Grade
Rules:
90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → F
Example:
Math = 80
English = 75
Science = 90
Social = 85
Computer = 95

Total = 425
Average = 85
Grade = B
Topics: variables, arithmetic operators, conditions.
 */

let math     = Number(prompt("Enter Math marks:"));
let english  = Number(prompt("Enter English marks:"));
let science  = Number(prompt("Enter Science marks:"));
let social   = Number(prompt("Enter Social marks:"));
let computer = Number(prompt("Enter Computer marks:"));


let total = math + english + science + social + computer;
let average = total / 5;


let grade;

if (average >= 90 && average <= 100) {
    console.log(`grade = "A"`);

} else if (average >= 80 && average < 90) {
    console.log(`grade = "B"`);

} else if (average >= 70 && average < 80) {
    console.log(`grade = "C"`);

} else if (average >= 60 && average < 70) {
    console.log(`grade = "D"`);
    
} else {
    console.log(`grade = "F"`);
}

console.log(`Total = ${total}`);
console.log(`Average = ${average}`);

//  ------------- TASK END-------------------- //

/* Task 5 — Number Pattern
Using a for loop:
1
2
3
4
5
Then create:
5
4
3
2
1
Then:
1 2 3 4 5
Challenge: Do each one using a different loop.
 */

// for loop:-
for(let a =1; a<=5; a++){
    console.log(`for loop:- ${a}`);
    
}

// while loop:-
let sample = 5;

while(sample > 0){
    console.log(`While loop:- ${sample}`);

    sample--;
}

//  ------------- TASK END-------------------- //

/* Task 6 — Shopping Cart
Create an array:
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
Create prices:
let prices = [50000, 1000, 2000, 15000];
Using a loop, display:
Laptop - ₹50000
Mouse - ₹1000
Keyboard - ₹2000
Monitor - ₹15000
Then calculate:
Total = ₹68000
Topics: arrays, loops, arithmetic.
 */

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];

for(let i = 0; i < products.length; i++){
    console.log(`${products[i]} - ₹${prices[i]}`);
}

//  ------------- TASK END-------------------- //

/* Task 7 — Employee Object
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
Using for...in, print:
name : Arun
empId : STK-101
role : Software Engineer
salary : 45000
Then create a function:
calculateBonus()
If salary >= 40000:
Bonus = 5000
Otherwise:
Bonus = 3000
Your notes cover objects and for...in.
 */

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for (let key in employee) {
    console.log(`${key} : ${employee[key]}`);
}

function calculateBonus(salary) {
    if (salary >= 40000) {
        console.log("Bonus = 5000");
    } else {
        console.log("Bonus = 3000");
    }
}

calculateBonus(employee.salary);

//  ------------- TASK END-------------------- //

/* Task 8 — Bank Account Functions
Create these functions:
deposit()
withdraw()
checkBalance()
Starting balance:
₹10,000
Example:
deposit(5000)
withdraw(2000)
checkBalance()
Expected:
Deposited: ₹5000
Withdrawn: ₹2000
Current Balance: ₹13000
Challenge: Don't use global variables unnecessarily. Pass values through parameters and return results. This practices the parameter/argument/return concepts in your notes.
 */

function deposit(balance, amount) {
    let newBalance = balance + amount;
    console.log(`Deposited: ₹${amount}`);
    return newBalance;
}

function withdraw(balance, amount) {
    let newBalance = balance - amount;
    console.log(`Withdrawn: ₹${amount}`);
    return newBalance;
}

function checkBalance(balance) {
    console.log(`Current Balance: ₹${balance}`);
}

let accountBalance = 10000;

accountBalance = deposit(accountBalance, 5000);
accountBalance = withdraw(accountBalance, 2000);
checkBalance(accountBalance);

//  ------------- TASK END-------------------- //

/* Task 9 — Callback Calculator
Create:
add()
sub()
mul()
div()
Then create a higher-order function:
calculate(callback, a, b)
Example:
calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);
Expected:
30
10
200
2 
*/

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(callback, num1, num2) {
    let result = callback(num1, num2);
    console.log(result);
}

calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);

//  ------------- TASK END-------------------- //
