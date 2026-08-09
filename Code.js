// java script task assigned at 07-08-2026 by Naveen //

/*
Task 1 - Student Details
Create variables using:
const for college name
let for student name
var for student age
Print all values using console.log().
*/

const CollegeName = "PSG";

let StudentName = "Sample";

var sample = 22;

console.log("College Name:-",CollegeName,"\n","Student Name:-",StudentName,"Age:-",sample)

//  ------------- TASK END--------------------

/*
Task 2 - Mobile Price
Create a variable price = 25000.
Change the price to 27000.
Print the updated price.
*/

var MobilePrice = 25000;

MobilePrice = 27000;

console.log("Updated Price:-",MobilePrice);

//  ------------- TASK END-------------------- //

/*
Task 3 - Company Name
Create a const variable called company.
Try to change its value.
Observe the error.
*/

const Company = "Stackly";

// Company = "PreyFox";

console.log(Company);

//  constant value is not changable

//  ------------- TASK END-------------------- //

/*
Task 4 - Console Practice
Print the following using different console methods.
"Login Successful"
"Password is Weak"
"Network Error"
Use:
console.log()
console.warn()
console.error()
*/

console.log("Login Successful");
console.warn("your password is weak");
console.error("Network Error");

//  ------------- TASK END-------------------- //

/*
Task 5 - Data Types
Create variables for:
Your Name
Your Age
Are you a developer? (true/false)
An uninitialized variable
Print the value and its datatype.
*/

var YourName = "Gobinath.R";
var Age = 25;
var Are_You_a_Developer = true;
var An_uninitialized_variable;

console.log("Your Name Is:-",typeof YourName,'\n',"Age Is in:-",typeof Age,"\n","Are You a Developer is a:-",typeof Are_You_a_Developer,"\n","Undefined Value Variable shows:-",An_uninitialized_variable)

//  ------------- TASK END-------------------- //

/*
Task 6 - Shopping Cart Array
Create an array named cart.
Store:
Laptop
Mouse
Keyboard
Headset
Monitor
Print:
First product
Third product
Last product
*/

let Cart = ["laptop","Mouse","Keyboard","Headset","Monitor"];

console.log(Cart[0]);
console.log(Cart[2]);
console.log(Cart[4]);

//  ------------- TASK END-------------------- //

/*
Task 7 - Favorite Movies
Create an array with 6 movie names.
Print:
2nd movie
5th movie
Last movie
*/

let FavoriteMovie =["singam","Seval","Maan karathey","puli","jananayagan","gilli"];
console.log(FavoriteMovie[1]);
console.log(FavoriteMovie[4]);
console.log(FavoriteMovie[FavoriteMovie.length-1]);

//  ------------- TASK END-------------------- //

/*
Task 8 - Employee Object
Create an object.
Properties:
name
age
department
skills (array)
salary
Print:
Employee name
Department
First skill
Salary
*/

let Properties = {
    Name: "sample2",
    age :  25,
    department:"Maths",
    salary: 300000,
    skills: ["Tamil writing","English speaking","Math formula"]
}

console.log("Employee Name:-",Properties.Name);
console.log("Department:-",Properties.department);
console.log("First Skill:-",Properties.skills[0]);
console.log("Salary:-",Properties.salary);

//  ------------- TASK END-------------------- //

/*
Task 9 - Product Details
Create an object.
Properties:
productName
brand
price
colors (array)
Print:
Brand
Price
Second color
*/

let Properties1 = {
    productName: "Rolls Royce",
    brand      : "BMW",
    price      : "7cr",
    colors     : ["Pink","Red","Green","Yellow"]
}

console.log("Brand:-",Properties1.brand);
console.log("Price:-",Properties1.price);
console.log("Second Color:-",Properties1.colors[1]);

//  ------------- TASK END-------------------- //

/*
Task 10 - Arithmetic Calculator
Take two numbers.
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Exponent
Print every result.
*/

console.log("Addition:-",10+12);
console.log("Subtraction:-",12-10);
console.log("Multiplication:-",5*5);
console.log("Division:-",5/5);
console.log("Modulus:-",5%20);
console.log("Exponent:-",5**5);

//  ------------- TASK END-------------------- //

/*
Task 11 - Increment Practice
let a = 5;
Perform:
a++
++a
a--
--a
Print after every step.
*/

let a = 5;

b = a++;
c = ++a;
d = a--;
e = --a;

console.log(b);
console.log(c);
console.log(d);
console.log(e);

//  ------------- TASK END-------------------- //

/*
Task 12 - Predict the Output
let a = 10;

let b = a++;

let c = ++b;

console.log(a);
console.log(b);
console.log(c);
Write the output before running.
*/

let ab = 10;

let bc = ab++;

let cd = ++bc;

/* ab value = 10 because searching element finds in variable side 
that the value side it calculates yet the variable is the rule */

/* bc value = 11 because it find in value side
 so we have to calculate all the values */

/* cd value = 11 because it used until calculate variable formula in value side*/

console.log(ab);
console.log(bc);
console.log(cd);

//  ------------- TASK END-------------------- //

/*
Task 13 - Predict the Output
let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);
Predict the output.
*/

let x = 7;

let y = --x;

let z = y++;

console.log(x); // x value find in variable side so we have to find and calculate yet the value side variable
console.log(y);
console.log(z); 

//  ------------- TASK END-------------------- //

/*
Task 14 - School Object
Create an object.
Properties:
schoolName
principal
totalStudents
classes (array)
Print:
School name
Principal
Last class
*/

let SchoolObject = {
    schoolName:"rcb",
    principal :"koli",
    totalStudents:45,
    classes   : ["A class","B class","C class"]
}

console.log("School Name:-",SchoolObject.schoolName);
console.log("School Name:-",SchoolObject.principal);
console.log("Last Class:-",SchoolObject.classes[2]);

//  ------------- TASK END-------------------- //

/*
Task 15 - Grocery List
Create an array with 8 grocery items.
Print:
First item
Fourth item
Last item
*/

let GroceryList = ["Oil","Masala","ginger","termeric powder","chilli powder","salt","cardemom","pepper powder"];

console.log(GroceryList[0]);
console.log(GroceryList[4]);
console.log(GroceryList[GroceryList.length-1]);

//  ------------- TASK END-------------------- //

/*
Task 16 - User Profile
Create variables:
Username
Email
Age
IsPremium
Print each value and datatype.
*/

let Username = "Gobinath";
let Email = "gobinath@thestackly.com";
let Age1 = 25;
let IsPremium = true;

console.log(typeof Username,"value:-",Username);
console.log(typeof Email,"value:-",Email);
console.log(typeof Age1,"value:-",Age1);
console.log(typeof IsPremium,"value:-",IsPremium);

//  ------------- TASK END-------------------- //

/*
Task 17 - Variable Rules
Create:
one var
one let
one const
Try:
Reassign all
Redeclare all
Write which operations are allowed and which give errors.
*/

var name1 = 12;
name1 = 14;
var name1 = 18;
console.log(name1);

//  var can be re-assinged and redecleared

let name2 = 112;
name2 = 113;
// let name2 = 114;
console.log(name2);

//  let is not reclearable if used we got error

const name3 = "Gobinath.R";
// name3 = "GR";
// name3 = "GR";
console.log(name3);

// Constant value is not be reusable and redeclarable

//  ------------- TASK END-------------------- //

/*
Task 18 - Marks Calculation
Create:
let tamil = 85;
let english = 90;
let maths = 95;
Calculate:
Total
Average
Print both.
*/

let tamil = 85;
let english = 90;
let maths = 95;

console.log("Total:-",tamil+english+maths);
console.log("Average:-",tamil+english+maths/3);

//  ------------- TASK END-------------------- //

/*
Task 19 - Company Database
Create an object:
Company
Employees (Array)
Location
Founded Year
CEO
Print:
CEO
Location
First employee
*/

let CompanyDatabase = {
    Company     :"Stackly",
    Location    :"Coimbatore",
    FoundedYear : 2000,
    CEO         :"I Don't know",
    Employees   :["3000","5000","5000"]
}

console.log("CEO:-",CompanyDatabase.CEO);
console.log("Location:-",CompanyDatabase.Location);
console.log("Employees:-",CompanyDatabase.Employees[0]);

//  ------------- TASK END-------------------- //

/*
Task 20 - Mini Profile
Create an object where one property is an array.
Example:
Name
City
Hobbies (Array)
Age
Print:
Name
Second hobby
Age
*/

let MiniProfile ={
    Name:"Gobinath.R",
    City:"Coimbatore",
    Hobbies:["creating web apps","learning something new","listening songs"],
    Age2: 25
}

console.log("Name:-",MiniProfile.Name);
console.log("Second Hobby:-",MiniProfile.Hobbies[1]);
console.log("Age:-",MiniProfile.Age2);

//  ------------- TASK END-------------------- //
