// java script task2 assigned at 00-08-2026 by Naveen //

/* 
1. Variables – Student Details
Create variables for studentName, age, course, and mark.
Use let, const, and var at least once.
Print all details using console.log(). 
*/

let StudentName = "Gobinath.R";
const Course = "Full Stack Developer";
var age = 25;
let mark = 100;

console.log("Student Name:-",StudentName);
console.log("Course:-",Course);
console.log("Age:-",age);
console.log("Mark:-",mark);

//  ------------- TASK END-------------------- //

/*
2. User Input
Use prompt() to get:
Name
Age
Display the name in the console.
Display the age using alert().
*/

let Name = prompt("Enter Your Name:-");
let Age = prompt("Enter Your Age In Numbers:-");

console.log("Your Name is:-",Name);
alert("Your Age is:-"+ Age); // (or)
alert(`Your Age Is:- ${Age}`);

//  ------------- TASK END-------------------- //

/* 
3. Data Types
Create one variable for each:
String
Number
Boolean
Undefined
Null
Print the value and its typeof.
*/

let StringValue = "Gobinath R";
let NumberValue = 25;
let BooleanValue = true;
let UndefinedValue;
let NullValue = null;

console.log(typeof(StringValue),StringValue);
console.log(typeof(NumberValue),NumberValue);
console.log(typeof(BooleanValue),BooleanValue);
console.log(typeof(UndefinedValue),UndefinedValue);
console.log(typeof(NullValue),NullValue);

//  ------------- TASK END-------------------- //

/* 
4. Array – Shopping List
Create an array containing 6 products:
"Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"
Print:
First product
Third product
Last product
Complete array
*/

let ShoppingList = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

console.log(ShoppingList[1]);
console.log(ShoppingList[3]);
console.log(ShoppingList[5]);
console.log(ShoppingList);

//  ------------- TASK END-------------------- //

/* 
5. Object – Employee Details
Create an object containing:
name
age
role
salary
Print each property separately.
*/

let EmployeeDetails = {
  Name: "Gobinath R",
  Age : 25,
  Role: "Full Stack Developer",
  Salary: 1
}

console.log("Name:-",EmployeeDetails.Name);
console.log("Age:-",EmployeeDetails.Age);
console.log("Role:-",EmployeeDetails.Role);
console.log("Salary:-",EmployeeDetails.Salary);

//  ------------- TASK END-------------------- //

/* 
6. Arithmetic Operator – Bill Calculator
Given:
Product price = 500
Quantity = 3
Calculate and print:
Total price
Discount of ₹100
Final amount
Use +, -, *, and /.
*/

let ProductPrice = 500;
let Quantity = 3;
let TotalPrice = ProductPrice+Quantity;
let Discount = 100;

console.log("Addition:-",ProductPrice+Quantity);
console.log("Subtraction:-",ProductPrice-Quantity);
console.log("Multiply:-",ProductPrice*Quantity);
console.log("Divide:-",ProductPrice/Quantity);

console.log(`Total Price Is:- ${TotalPrice}\nDiscount Price Is:- ₹ ${Discount}\nSo Bill Amount Is:- ${TotalPrice-Discount}`);

//  ------------- TASK END-------------------- //

/* 
7. Comparison Operators
Write console.log() statements to check:
25 > 20
15 < 10
50 == "50"
50 === "50"
100 != "100"
100 !== "100"
Print the results.
*/

let a = 25 > 20;
let b = 15 < 10;
let c = 50 == "50";
let d = 50 === "50";
let e = 100 != "100";
let f = 100 !== "100";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//  ------------- TASK END-------------------- //

/* 
8. Logical Operators
Find the output of these without running them first:
console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);
*/

console.log(10 > 5 && 20 > 15 || 5 > 10);
//             true && true = true || false = true;

console.log(10 < 5 || 20 >= 20 && 5 == "5");
//          false  || true = true && true = true;

console.log(15 === "15" || 10 > 5 && 8 < 3);
//            false || true = true && false = false

console.log(20 >= 20 && 5 !== "5" || 10 < 5);
//           true && true = true || false = true;

console.log(25 < 20 || 30 == "30" && 10 >= 10);
//            false || true = true && true = true;

//  ------------- TASK END-------------------- //

/* 
9. Ternary Operator – Login
let passwordCorrect = true;
Using a ternary operator, print:
"Login successful"
if true, otherwise:
"Invalid password"
*/

let passwordCorrect = true;

passwordCorrect ? console.log("login successful"): console.log("Invalid Password");

//  ------------- TASK END-------------------- //

/* 
10. Type Casting – Marks
You have:
let mark1 = "80";
let mark2 = "70";
Convert both values into numbers and calculate the total.
Expected:
150
*/

let mark1 = "80";
let mark2 = "70";
let total = Number(mark1)+Number(mark2);

console.log(total);

//  ------------- TASK END-------------------- //

/* 
11. Voting Eligibility
Create:
let age = 20;
Using if...else, print:
"You can vote"
if age is 18 or above; otherwise:
"You cannot vote"
*/

let age = 20;

if (age >18){
    console.log("You Can vote");
}else{
    console.log("You Cannot Vote");
}

//  ------------- TASK END-------------------- //

/* 
12. Student Grade
Create a mark variable.
Using if...else if...else:
90–100 → A Grade
75–89 → B Grade
50–74 → C Grade
Below 50 → Fail
Above 100 or below 0 → Invalid Mark
*/

let mark = 85;

if (mark > 100 || mark < 0) {
    console.log("Invalid Mark");
} else if (mark >= 90) {
    console.log("A Grade");
} else if (mark >= 75) {
    console.log("B Grade");
} else if (mark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}

//  ------------- TASK END-------------------- //

/* 
13. Time Greeting
Create:
let time = 15;
Using if...else if, display:
1–6 → Early Morning
7–12 → Good Morning
13–15 → Good Afternoon
16–19 → Good Evening
20–24 → Good Night
Otherwise → Invalid Time
This directly follows the time-condition practice in your code.
*/

let time = 15;

if (time <= 0 || time > 24){
    console.log("Invalid Time");
}else if (time <= 6){
    console.log("Early Morning");
}else if (time <= 12){
    console.log("Good Morning");
}else if (time <= 15){
    console.log("Good afternoon");
}else if (time <= 19){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}

//  ------------- TASK END-------------------- //

/* 
14. Nested If – Job Eligibility
Take:
age
height
weight
A candidate is eligible only if:
Age ≥ 21
Height ≥ 170 cm
Weight ≥ 70 kg
Use nested if statements and display the appropriate reason if the candidate is not eligible. This is based on the nested-if pattern in your code.
*/

let age = prompt("Enter Your Age in Numbers:- ");
let height = prompt("Enter Your Height in Numbers:- ");
let weight = prompt("Enter Your Weight in Numbers:- ");

if (age >= 21){
    if (height >= 170){
        if (weight >= 70){
            alert("Your Eligible")
        }else{
            alert(`Your Weight is ${weight} But we need >= 70Kg`); 
        }
    }else{
        alert(`Your Height is ${height} But we need >= 170 cm`);
    }
}else{
    alert(`Your age is ${age} but we need >= 21`);
}

//  ------------- TASK END-------------------- //

/* 
15. Switch – Traffic Light
Create:
let trafficLight = "green";
Using switch, display:
red → "Stop the vehicle"
yellow → "Get ready"
green → "Go"
Anything else → "Invalid traffic light"
*/

let trafficLight = "green";

switch (trafficLight){
    case    "red"     : console.log("Please Stop"); break;
    
    case    "yellow"  : console.log("Please be ready"); break;
    
    case    "green"   : console.log("You can Go Now"); break;
    
    default           : console.log("Have a safe ride"); break;
}

//  ------------- TASK END-------------------- //
