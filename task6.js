// java script task 6 assigned at 19-08-2026 by Naveen //

/* JavaScript Practical Task – Employee Management System
Task
Create a JavaScript Employee Management System using only JavaScript.
Create an array containing at least 8 employees. Each employee should have:
id
name
department
salary
experience
skills
Example structure:
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    }
];
Requirements
Students must implement the following:
Display all employees
Use forEach().

Find employees
Find employees whose salary is greater than ₹40,000.
Use filter().

Find a particular employee
Search employee using id.
Use find().

Calculate total salary
Calculate the total salary of all employees.
Use reduce().

Check salary condition
Check whether at least one employee has salary above ₹1,00,000.
Use some().

Check experience
Check whether every employee has at least 1 year of experience.
Use every().

Sort employees
Sort employees by salary from highest to lowest.

Array manipulation
Add a new employee using push().
Remove the last employee using pop().
Add an employee at the beginning using unshift().
Remove the first employee using shift().

Destructuring
Use object destructuring to extract:
name
department
salary

Use array destructuring for the employee's skills.

Spread operator
Create a new employee array using the spread operator without directly modifying the original array.

Rest operator
Create a function that accepts an employee name and multiple skill values using the rest operator.

Functions
Create separate functions for:
Add employee
Delete employee
Search employee
Calculate total salary
Display employees
Conditional statements
Display salary category:
₹0–₹30,000 → Junior
₹30,001–₹60,000 → Mid Level
Above ₹60,000 → Senior

Date
Add a joiningDate to every employee.
Display the employee's joining year using getFullYear().
Display the joining month using getMonth().
User Input
Use prompt() to ask the user for an employee ID.
Search and display that employee's details. 
*/

// employee details creation;
let employees = [
    {
        id:             101,
        name:           "Arun",
        department:     "IT",
        salary:         45000,
        experience:     2,
        skills:         ["HTML", "CSS", "JavaScript"]
    },
    {
        id:             102,
        name:           "Varun",
        department:     "IT",
        salary:         100000,
        experience:     3,
        skills:         ["CSS","JS"]
    },
    {
        id:             103,
        name:           "Darun",    
        department:     "Admin",      
        salary:         30000,    
        experience:     5,        
        skills:         ["IOT","Communication"]
    },
    {
        id:             104,
        name:           "Kiran",
        department:     "HR",
        salary:         38000,
        experience:     5,
        skills:         ["Writing","Speaking"]
    },
    {
        id:             105,
        name:           "saran",
        department:     "Security",
        salary:         40000,
        experience:     11,
        skills:         ["Watching","Standing","Sleeping"]
    },
    {
        id:             106,
        name:           "Karan",
        department:     "Tea Boy",
        salary:         65000,
        experience:     5,
        skills:         ["Management","shopping"]
    }
];

// Display all employees Using forEach().

employees.forEach((c,i,t) => {
    console.log("Printing All Employees Name:-",c.name);
    
});

//Find employees whose salary is greater than ₹40,000. Using filter().

let GreaterThan40k = employees.find((c,i,t) => {
    return c.salary > 40000;
    
})
console.log(GreaterThan40k);

// Finding particular employee Search employee using id. Use find().

let EmployeeID_Search = employees.find((c,i,t) => {
    return i.id == 106;
});
console.log(EmployeeID_Search);


//Calculating total salary of all employees. Using reduce().

let Total_Salary_All = employees.reduce((acc,c,i,t) => {
    return acc + c.salary;
},0);
console.log(Total_Salary_All);

// Check whether at least one employee has salary above ₹1,00,000. Use some().

let Salary_Above1l = employees.some((c,i,t) => {
    return c.salary >= 100000;
})
console.log(Salary_Above1l);

// Checking whether every employee has at least 1 year of experience. Using every().

let Every_Employee_Exe = employees.every((c,i,t)=> {
    return c.experience >= 1;
})
console.log(Every_Employee_Exe);

// Sort employees by salary from highest to lowest.

let Sorting_salary = employees.sort((a,b)=>{
    return b.salary - a.salary
})
console.log(Sorting_salary);

/* 
Array manipulation
Add a new employee using push().
Remove the last employee using pop().
Add an employee at the beginning using unshift().
Remove the first employee using shift().
*/

// Adding a new employee object using push()
employees.push({
    id: 107,
    name: "Theeran",
    department: "QA",
    salary: 42000,
    experience: 3,
    skills: ["Manual Testing", "Automation"]
});

console.log(employees);

// Remove the last employee using pop().

employees.pop();

// Add an employee at the beginning using unshift().

employees.unshift({
    id: 107,
    name: "Maaran",
    department: "QA",
    salary: 42000,
    experience: 3,
    skills: ["Manual Testing", "Automation"]
});

console.log(employees);

// Remove the first employee using shift().

employees.shift();

console.log(employees);

/* 
Destructuring
Use object destructuring to extract:
name
department
salary
*/

let Employees_Details = {
    E1: ( employees[0].name +" "+employees[0].department +" " + employees[0].salary),
    E2: ( employees[1].name +" "+employees[1].department +" " + employees[1].salary),
    E3: ( employees[2].name +" "+employees[2].department +" " + employees[2].salary),
    E4: ( employees[3].name +" "+employees[3].department +" " + employees[3].salary),
    E5: ( employees[4].name +" "+employees[4].department +" " + employees[4].salary),
    E6: ( employees[5].name +" "+employees[5].department +" " + employees[5].salary)
}

console.log(Employees_Details.E1);
console.log(Employees_Details.E2);
console.log(Employees_Details.E3);
console.log(Employees_Details.E4);
console.log(Employees_Details.E5);
console.log(Employees_Details.E6);

// Use array destructuring for the employee's skills.

let ArunSkills = employees[0].skills;
console.log(ArunSkills);

let VarunSkills = employees[1].skills;
console.log(VarunSkills);

let DarunSkills = employees[2].skills;
console.log(DarunSkills);

let KiranSkills = employees[3].skills;
console.log(KiranSkills);

let SaranSkills = employees[4].skills;
console.log(SaranSkills);

let KaranSkills = employees[5].skills;
console.log(KaranSkills);

// using spread operator creating new array without modifying original data;

let newEmployee = {
    id: 107,
    name: "vetri",
    department: "QA",
    salary: 42000,
    experience: 3,
    skills: ["Testing", "Selenium"]
};

let updatedEmployees = [...employees, newEmployee];

console.log("Original Employees Array (Unmodified):", employees); 
console.log("New Updated Array (With Theeran):", updatedEmployees);

// rest operator;

function addEmployeeSkills(name, ...skills) {
    console.log(`Employee Name: ${name}`);
    console.log(`Skills Array:`, skills); 
}

addEmployeeSkills("Arun", "HTML", "CSS", "JavaScript", "React");
addEmployeeSkills("Kiran", "Writing", "Speaking");

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2024-03-15")
    },
    {
        id: 102,
        name: "Varun",
        department: "IT",
        salary: 100000,
        experience: 3,
        skills: ["CSS", "JS"],
        joiningDate: new Date("2023-06-20")
    },
    {
        id: 103,
        name: "Darun",    
        department: "Admin",      
        salary: 30000,    
        experience: 5,        
        skills: ["IOT", "Communication"],
        joiningDate: new Date("2021-01-10")
    },
    {
        id: 104,
        name: "Kiran",
        department: "HR",
        salary: 38000,
        experience: 5,
        skills: ["Writing", "Speaking"],
        joiningDate: new Date("2022-11-05")
    },
    {
        id: 105,
        name: "saran",
        department: "Security",
        salary: 40000,
        experience: 11,
        skills: ["Watching", "Standing", "Sleeping"],
        joiningDate: new Date("2015-08-12")
    },
    {
        id: 106,
        name: "Karan",
        department: "Tea Boy",
        salary: 65000,
        experience: 5,
        skills: ["Management", "shopping"],
        joiningDate: new Date("2019-05-25")
    }
];

function addEmployee(id, name, dept, salary, exp, skills, dateStr) {
    let newEmp = {
        id: id,
        name: name,
        department: dept,
        salary: salary,
        experience: exp,
        skills: skills,
        joiningDate: new Date(dateStr)
    };
    employees.push(newEmp);
}

function deleteEmployee(id) {
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }
}

function searchEmployee(id) {
    let found = employees.find(emp => emp.id === id);
    return found;
}

function calculateTotalSalary() {
    let total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    return total;
}

function getSalaryCategory(salary) {
    if (salary <= 30000) {
        return "Junior";
    } else if (salary <= 60000) {
        return "Mid Level";
    } else {
        return "Senior";
    }
}

function displayEmployees() {
    employees.forEach(emp => {
        let category = getSalaryCategory(emp.salary);
        let year = emp.joiningDate.getFullYear();
        let month = emp.joiningDate.getMonth() + 1;
        
        console.log("ID: " + emp.id + ", Name: " + emp.name + ", Dept: " + emp.department + ", Salary: ₹" + emp.salary + " (" + category + "), Joined: " + month + "/" + year);
    });
}

addEmployee(107, "Theeran", "QA", 75000, 4, ["Selenium"], "2025-02-14");
displayEmployees();

let userInput = prompt("Enter Employee ID to search:");
let searchId = Number(userInput);
let result = searchEmployee(searchId);

if (result) {
    let category = getSalaryCategory(result.salary);
    let year = result.joiningDate.getFullYear();
    let month = result.joiningDate.getMonth() + 1;
    console.log("Found: " + result.name + " | Category: " + category + " | Year: " + year + " | Month: " + month);
} else {
    console.log("Employee not found");
}

//  ------------- TASK END-------------------- //

/* Bonus Task :-
Create a menu-driven Employee Management System:
1. Display All Employees
2. Add Employee
3. Search Employee
4. Filter High Salary Employees
5. Calculate Total Salary
6. Sort By Salary
7. Delete Employee
8. Exit
Use switch, functions, arrays, objects, loops and higher-order array methods.
 */

let employees = [
    { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2, skills: ["HTML", "CSS", "JavaScript"] },
    { id: 102, name: "Varun", department: "IT", salary: 100000, experience: 3, skills: ["CSS", "JS"] },
    { id: 103, name: "Darun", department: "Admin", salary: 30000, experience: 5, skills: ["IOT", "Communication"] },
    { id: 104, name: "Kiran", department: "HR", salary: 38000, experience: 5, skills: ["Writing", "Speaking"] },
    { id: 105, name: "saran", department: "Security", salary: 40000, experience: 11, skills: ["Watching", "Standing", "Sleeping"] },
    { id: 106, name: "Karan", department: "Tea Boy", salary: 65000, experience: 5, skills: ["Management", "shopping"] }
];

function displayAll() {
    console.log("Employee List");
    if (employees.length === 0) {
        console.log("No employees found.");
        return;
    }
    employees.forEach(emp => {
        console.log("ID: " + emp.id + " | Name: " + emp.name + " | Dept: " + emp.department + " | Salary: ₹" + emp.salary);
    });
}

function addEmployee() {
    let id = Number(prompt("Enter Employee ID:"));
    let name = prompt("Enter Name:");
    let dept = prompt("Enter Department:");
    let salary = Number(prompt("Enter Salary:"));
    let exp = Number(prompt("Enter Experience (years):"));
    let skillsInput = prompt("Enter Skills (separated by commas):");
    let skills = skillsInput.split(",");

    let newEmp = { id, name, department: dept, salary, experience: exp, skills };
    employees.push(newEmp);
    console.log("Employee added successfully!");
}

function searchEmployee() {
    let id = Number(prompt("Enter Employee ID to search:"));
    let found = employees.find(emp => emp.id === id);
    if (found) {
        console.log("Found: " + found.name + " | Dept: " + found.department + " | Salary: ₹" + found.salary);
    } else {
        console.log("Employee not found!");
    }
}

function filterHighSalary() {
    console.log("Employees with Salary > ₹40,000");
    let highSalaryEmps = employees.filter(emp => emp.salary > 40000);
    if (highSalaryEmps.length === 0) {
        console.log("No employees found matching criteria.");
        return;
    }
    highSalaryEmps.forEach(emp => {
        console.log("Name: " + emp.name + " | Salary: ₹" + emp.salary);
    });
}

function calculateTotalSalary() {
    let total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    console.log("Total Salary Expenditure: ₹" + total);
}

function sortBySalary() {
    employees.sort((a, b) => b.salary - a.salary);
    console.log("Employees sorted by salary (Highest to Lowest)!");
    displayAll();
}

function deleteEmployee() {
    let id = Number(prompt("Enter Employee ID to delete:"));
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee deleted successfully!");
    } else {
        console.log("Employee ID not found!");
    }
}

let running = true;

while (running) {
    let menu = "Employee Management System\n" +
               "1. Display All Employees\n" +
               "2. Add Employee\n" +
               "3. Search Employee\n" +
               "4. Filter High Salary Employees\n" +
               "5. Calculate Total Salary\n" +
               "6. Sort By Salary\n" +
               "7. Delete Employee\n" +
               "8. Exit\n" +
               "Enter your choice (1-8):";
               
    let choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            displayAll();
            break;
        case 2:
            addEmployee();
            break;
        case 3:
            searchEmployee();
            break;
        case 4:
            filterHighSalary();
            break;
        case 5:
            calculateTotalSalary();
            break;
        case 6:
            sortBySalary();
            break;
        case 7:
            deleteEmployee();
            break;
        case 8:
            console.log("Exiting system. Goodbye!");
            running = false;
            break;
        default:
            console.log("Invalid choice! Please choose between 1 and 8.");
    }
}


//  ------------- TASK END-------------------- //
