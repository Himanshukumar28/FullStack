//Practice 1.

const student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    marks: 78
};

// 1. Display the student's name.
console.log(student.name);
// 2. Update the marks to 90.
student.marks = 90;
// 3. Add a new properties city with the value "indore"
student.city = 'indore'
// 4. remove the course properties
delete student.course;
// 5. display the update the student object
console.log(student);


//Practice 2.
const employee = {
    employeeName: "Rohit",
    salary: 30000,
    department: "HR"
};

//1. Display the employee's current salary.
console.log(employee.salary);
//2. Update the salary to 40000.
employee.salary = 40000;
//3. Add a new property email.
employee.email = 'himanshukashyapg01@gmail.com';
//4.Remove the department properties
delete employee.department;
//5.Add a method greet() that prints: Hello Rohit.
employee.greet = function() {
    console.log("Hello Rohit");
};
//6. Call the method.
employee.greet();
//Display the Updated employee object.
console.log(employee);


//Practice 3. 
const movie = {
    movie_name: "KGF",
    rating: 9,
    language: "Hindi"
};

//1. Display the movie name using Bracket Notation.
console.log(movie["name"]);

//2. Update the rating to 10.
movie.rating = 10;
//3. Add a new  property hero
movie.hero = "Modi";
//4. Remove the language properties.
delete movie.language;
//5. Display the final object
console.log(movie);


//Practice 4.
const user = {
    userName: "Rohit",
    theme: "Light",
    language: "English"
};

let target = "theme";

//1. Display the current theme using the variable target
console.log(user[target]);
//2. Change the theme to Dark.
user.theme = "dark";
//3. Add a new property fontSize.
user.fontSize = 60;
//4. Display the update object.
console.log(user);

//Practice 5.
const account = {
    accountHolder: "Shivam",
    balance: 10000
};

//1. Add a method showBalance()
//2.It should print Current Balance is 10000.
//3. Update the balance to 15000.
//4. call the method again. Expect output: Current Balance is 15000.


