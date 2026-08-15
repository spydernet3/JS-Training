
// java script task 4 assigned at 14-08-2026 by Naveen //

/* Level 1 — Variables & Operators
1. Salary Calculator
let salary = 30000;
let bonus = 5000;
let tax = 2000;
Calculate and print:
Final Salary: 33000
*/

let Salary = 30000;
let Bonus  = 5000;
let tax    = 2000;

console.log(Salary+Bonus-tax);

//  ------------- TASK END-------------------- //

/* 2. Predict the Output
let a = 10;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c);
 */

let a = 10;
let b = a++;
let c = ++a;

console.log(a); // 12
console.log(b); // 10
console.log(c); // 12

//  ------------- TASK END-------------------- //

/* 3. Logical Operators
Without running the code, predict the output:
console.log(10 > 5 && 20 < 10 || 5 === "5");
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(!(10 > 5));
 */

console.log(10 > 5 && 20 < 10 || 5 === "5"); // true && false = false || false = false;
console.log(10 < 5 || 20 >= 20 && 5 == "5"); // false || true = true && true = true;
console.log(!(10 > 5)); // false

//  ------------- TASK END-------------------- //

/* Level 2 — Conditions
4. ATM Withdrawal
Create:
let balance = 10000;
let withdrawal = 2500;
Rules:
Withdrawal must be greater than 0
Withdrawal cannot exceed balance
Withdrawal must be a multiple of 100
Otherwise show appropriate error
If successful, print remaining balance
This is directly related to the ATM example in your notes.
*/

let balance = 10000;
let withdrawal = 2500;

if (withdrawal > 0){
    if (withdrawal <= balance){
        if (withdrawal % 100 === 0){
            let amount = balance-withdrawal;
            console.log(`withdrawal successful and Your Remaining Amount is ${amount}`);
            
        }else{
            console.log("Please use multiple of 100");
            
        }
    }else{
        console.log("insufficient balance! try again");
        
    }
    
}else {
    console.log("appropriate error");
    
}

//  ------------- TASK END-------------------- //

/* 5. Student Grade
let mark = 78;
Create an if / else if / else program:
90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → Fail
 */

let mark = 78;

if (mark >= 90 && mark <= 100){
    console.log(`You got "A" Grade`);
    
}else if(mark >=80 && mark <= 89){
    console.log(`You got "B" Grade`);
    
}else if(mark >=70 && mark <=79){
    console.log(`You got "C" Grade`);
    
}else if(mark >= 60){
    console.log(`You got "D" Grade`);
    
}else if (mark < 60){
    console.log("Sorry You fail in this exam");
    
}else{
    console.log("enter your marks");
    
}

//  ------------- TASK END-------------------- //

/* 6. Nested Login
Create:
let username = "admin";
let password = "1234";
let otp = 5555;
Rules:
Check username
If correct, check password
If correct, check OTP
Print "Login successful" only when all three are correct. 
*/

let username = "admin";
let password = "1234";
let otp = 5555;

let userusername = "admi";
let userpass     = "1111";
let userotp      =  5555;

if (userusername === username ){
    if (userpass == password){
        if (userotp === otp){
            console.log("Login successful");
            
        }else {
            console.log("Wrong OTP please try again");
            
        }
    }else {
        console.log("Wrong Password entered! please try again");
        
    }
}else{
    console.log("User name is wrong");
    
}

//  ------------- TASK END-------------------- //

/* Level 3 — Loops
7. Number Pattern
Using a for loop:
1
2
3
4
5
6
7
8
9
10 
*/

for (let val =1; val <= 10; val++){
    console.log(val)
}

//  ------------- TASK END-------------------- //

/* 8. Multiplication Table
let num = 7;
Expected:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70 
*/

let num = 7;

for (let i = 1; i <=10; i++){
    let result = num * i;
    console.log(result);
    
}

//  ------------- TASK END-------------------- //

/* 9. Reverse Countdown
Using while:
10
9
8
7
6
5
4
3
2
1
0
 */

let num = 10;

while (num >= 0){
    console.log(num);
    num--
}

//  ------------- TASK END-------------------- //

/* 10. OTP System
Create:
let correctOTP = 1234;
Allow the user maximum 3 attempts using while.
If correct:
OTP verified
Otherwise after 3 attempts:
Account blocked
This builds directly on your OTP loop example.
 */

let userattempt= 1;
let correctotp = 1234;
let userotp    = 1111;

while(userattempt <= 3){
    console.log("OTP is checking");
    
    if (userotp === correctotp){
        console.log("OTP Verified");
        break;
    }
        console.log("Account Blocked");
        userattempt++
}

//  ------------- TASK END-------------------- //

/* Level 4 — Arrays & Objects
11. Array Search
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
Using a loop, print every fruit.
Then print:
First fruit: apple
Last fruit: mango
*/

let fruits = ["apple", "banana", "orange", "grapes", "mango"];

for (i of fruits){
    console.log(i);
}

console.log("First fruit: " + fruits[0]);
console.log("Last fruit: " + fruits[fruits.length - 1]);

//  ------------- TASK END-------------------- //

/* 12. Object Details
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
Print each property using for...in.
Your notes use for...in for object traversal.
*/

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for(let key in employee){
    console.log(key + " : "+ employee[key]);
    
}

//  ------------- TASK END-------------------- //

/* Level 5 — Functions
13. Calculator Function
Create:
function calculator(a, b, operator) {
    // your code
}
It should support:
+
-
*
/
%
Example:
calculator(20, 5, "+");
calculator(20, 5, "*");
*/

function calculator(a, b, operator){
    switch (operator){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            console.log(a/b);
            break;
        case "%":
            console.log(a%b);
            break;
        default:
            console.log("Invalid Operator");
    } 
}

calculator(10,5,"+");
calculator(10,5,"-");
calculator(10,5,"*");
calculator(10,5,"/");
calculator(10,5,"%");
calculator(10,5,"=");

//  ------------- TASK END-------------------- //

/* 14. Employee Salary
Create:
function salaryDetails(salary, bonus) {
    // return final salary
}
Example:
salaryDetails(40000, 5000);
Expected:
45000
*/

function SalaryDetails(salary){
    return salary;
}
    let a = SalaryDetails(40000);
    console.log("Salary" +" " + a);
    
    function festival(bonus){
        console.log(a+bonus);
        
}

festival(5000);

//  ------------- TASK END-------------------- //

/* 15. Function With Default Parameter
Create a function:
function employee(name, role = "Trainee") {
    // print name and role
}
Test:
employee("Arun");
employee("Kamal", "Developer");
*/

function employee11(name,role = "Trainee"){
    console.log(name,role);
    
}

employee11("Arun");
employee11("Kamal","Developer");

//  ------------- TASK END-------------------- //

/* Level 6 — Advanced Functions
16. Callback Task
Create:
function calculate(a, b, callback) {
    // perform addition
    // then call callback
}
Create separate functions:
add()
sub()
mul()
Then pass them as callbacks.
This practices the callback/HOF concept from your notes.
*/

function add(x,y){
    console.log(x+y);
    
}

function sub(x,y){
    console.log(x-y);
    
}
function mul(x,y){
    console.log(x*y);
    
}

function calculate(a,b, callback){
    callback(a,b);
    
}
calculate(20,30,add);
calculate(30,30,sub);
calculate(30,30,mul);

//  ------------- TASK END-------------------- //

/* 17. Generator Task
Create a generator that gives:
₹100 Cashback
10% Discount
₹500 Cashback
20% Discount
Better Luck Next Time
Use .next().value to retrieve each reward.
*/

function* rewards(){
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next time"
}

let app = rewards();

console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next());

if(app.next().done){
    console.log("Rewards Completed");
    
}

//  ------------- TASK END-------------------- //

/* Level 7 — Spread / Rest / Destructuring 
18. Spread Operator
Given:
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
Create:
fullStack
Expected:
["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"]
Your notes specifically use spread to merge arrays and objects.
*/

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];

let fullstack = [...frontend,...backend];

console.log(fullstack);

//  ------------- TASK END-------------------- //

/* 19. Array Destructuring
Given:
let student = ["Arun", "ECE", 8.5, "Developer"];
Use destructuring to create:
name
department
cgpa
role
Do not use:
student[0]
student[1]
*/

let student = ["Arun", "ECE", 8.5, "Developer"];

let [name,department,cgpa,role]= student;

console.log(name);
console.log(department);
console.log(cgpa);
console.log(role);

//  ------------- TASK END-------------------- //

/* 20. Nested Object Destructuring
Given:
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};
Using nested object destructuring, directly extract:
employeeName
role
salary
*/

let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

console.log(company.employee);

//  ------------- TASK END-------------------- //

/* 🏆 Final Challenge — Mini Project
Build a Student Management Console Program using only the concepts in your notes.
Create:
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];
Your program should:
Print all students
Print only ECE students
Find students who scored above 80
Calculate total marks
Calculate average
Display highest mark
Display lowest mark
Use for...of
Use functions
Use object destructuring 
*/

let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

// printing all students name
console.log(students[0].name, students[1].name, students[2].name);

// checking students name in ECE
if(students[0].department === "ECE"){
    console.log(students[0].name,students[0].department);
    
}

if(students[1].department === "ECE"){
    console.log(students[1].name,students[1].department);
    
}

if(students[2].department === "ECE"){
    console.log(students[2].name,students[2].department);
    
}

// Checking mark >80
if (students[0].mark > 80) {
    console.log(students[0].name + " scored above 80. Mark: " + students[0].mark);
}

// Checking mark >80
if (students[1].mark > 80) {
    console.log(students[1].name + " scored above 80. Mark: " + students[1].mark);
}

// Checking mark >80
if (students[2].mark > 80) {
    console.log(students[2].name + " scored above 80. Mark: " + students[2].mark);
}

//calculating total marks
let totalmarks = students[0].mark + students[1].mark + students[2].mark;
console.log(`Total Marks:- ${totalmarks}`);
//average mark
let average = totalmarks/3;
console.log(`Average:- ${average}`);

//highest mark:-
if (students[0].mark>students[1].mark && students[0].mark > students[2].mark){
    console.log(`Highest Mark:- ${students[0].mark}`);
    
}

if (students[1].mark > students[0].mark && students[1].mark > students[2].mark) {
    console.log("Highest Mark: " + students[1].mark);
}


if (students[2].mark > students[0].mark && students[2].mark > students[1].mark) {
    console.log("Highest Mark: " + students[2].mark);
}

// displaying lowest mark:-
if (students[0].mark < students[1].mark && students[0].mark < students[2].mark){
    console.log(`Lowest mark:- ${students[0].mark}`);
    
}

if (students[1].mark < students[0].mark && students[1].mark < students[2].mark) {
    console.log("Lowest mark: " + students[1].mark);
}


if (students[2].mark < students[0].mark && students[2].mark < students[1].mark) {
    console.log("Lowest mark: " + students[2].mark);
}

//for of loop 

for ( let student of students){
    console.log(student);
    
}

//function:-
function allStudents(listOfStudents) {
    for (let student of listOfStudents) {

        let { name, department, mark } = student;
        
        console.log( name +" "+ department +" "+ mark);
    }
}

allStudents(students);

//object distructing:-
let totalstudents = {
    s1: (students[0].name +" "+students[0].department +" " + students[0].mark),
    s2: (students[1].name +" "+students[1].department +" " + students[1].mark),
    s3: (students[2].name +" "+students[2].department +" " + students[2].mark)
}

console.log(totalstudents.s1);
console.log(totalstudents.s2);
console.log(totalstudents.s3);

//  ------------- TASK END-------------------- //
