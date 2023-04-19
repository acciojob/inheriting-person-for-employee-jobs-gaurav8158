// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // call parent constructor with Employee's this context
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding a method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Testing the implementation
const person = new Person("John", 30);
person.greet(); // logs "Hello, my name is John, I am 30 years old."

const employee = new Employee("Jane", 25, "Manager");
employee.greet(); // logs "Hello, my name is Jane, I am 25 years old."
employee.jobGreet(); // logs "Hello, my name is Jane, I am 25 years old, and my job title is Manager."



// // complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
