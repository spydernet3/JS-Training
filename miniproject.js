
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
