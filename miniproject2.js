/* 🚀 Interview Challenge
Task 20: Employee Management Mini Program
Create an array:
let employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];
Without changing the original data:
Print all employee names using forEach()
Get only IT employees using filter()
Increase every salary by 10% using map()
Find employee with salary ₹45000 using find()
Calculate total salary using reduce()
Check whether anyone earns above ₹50000 using some()
Check whether everyone earns above ₹20000 using every()
Sort employees by salary from highest → lowest
Destructure each employee's name and salary
Use the spread operator to create a new employee list
 */

let employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];

// printing all employees names using foreach() 
employees.forEach((c,i,t) => {
    console.log(c.name);
});

// Get only IT employees using filter()
let IT_Employees = employees.filter((c,i,t)=>{
    return c.department === "IT";
    
});

console.log(IT_Employees);

// Increase every salary by 10% using map()

let Increasing_Salary = employees.map((c,i,t)=>{
    return c.salary + (c.salary * 0.10);
})
console.log(Increasing_Salary);

// Find employee with salary ₹45000 using find()

let SalaryOf45 = employees.find((c,i,t)=>{
    return c.salary === 45000;
    
})

console.log(SalaryOf45);

// Calculate total salary using reduce()

let Total_Salary = employees.reduce((acc,c,i,t)=>{
    return acc + c.salary;
},0)

console.log(Total_Salary);

// Check whether anyone earns above ₹50000 using some()

let Above50k = employees.some((c,i,t)=>{
    return c.salary > 50000;
    
})

console.log(Above50k);

// Check whether everyone earns above ₹20000 using every()

let checking = employees.every((c,i,t)=> {
    return c.salary > 20000;
})
console.log(checking);

// Sort employees by salary from highest → lowest

let sortmethod = employees.sort((a,b)=>{
    return a-b;
})

console.log(sortmethod);

// Destructure each employee's name and salary

let All_Employee_Details = {
    s1 : (employees[0].id +" "+ employees[0].name +" "+  employees[0].department +" "+  employees[0].salary),
    s2 : (employees[1].id +" "+ employees[1].name +" "+  employees[1].department +" "+  employees[1].salary),
    s3 : (employees[2].id +" "+ employees[2].name +" "+  employees[2].department +" "+  employees[2].salary)
}

console.log(All_Employee_Details.s1);
console.log(All_Employee_Details.s2);
console.log(All_Employee_Details.s3);

// Use the spread operator to create a new employee list

let newEmployeeList = [...employees, { id: 104, name: "Siva", department: "IT", salary: 50000 }];
console.log(newEmployeeList);

//  ------------- TASK END-------------------- //
