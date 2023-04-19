// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
//console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
// console.log(numberTeachers < numberStudents);


// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
// console.log(numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
// console.log(numberTeachers !== numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
// console.log(numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
// console.log(numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
// console.log(numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
// console.log(numberStudents <= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

// console.log(4 < 9);
// YOU DO: Explain.
// The line of code is logging the result of the Boolean comparison is 4 less than 5. 
//This should log true.

// var books = 3;
// console.log(4 < books);
// YOU DO: Explain.
// The line of code is stating the variable books, which is 3. 
// The console log is evalutating if 4 is less than the variable books, which is 3.
// This should log false.

// var friends = 6;
// var siblings = 2;
// console.log(friends > siblings);
// YOU DO: Explain.
// The first two line of code are stating two varaibles.
// The first variable is friends and that is 6.
// The second variable is siblings and that is 2.
// The console.log is evaluating if the variable friends, which is 6, is more than the variable siblings, whcich is two.
// This should log false.

// var attendees = 9;
// var meals = 8;
// console.log(attendees !== meals);
// YOU DO: Explain.
// The first two lines of code are stating two varables.
// The first varsiable is attendees, which is 9.
// The second variable is meals, which is 8.
// The console.log is evaluating if the varable attendees is not strictly equal to the number of meals.
// Since attendees is 9 and meals is 8, this will log true. 


// #-------------------
// PART 3: Logical Operators
// #-------------------

// var isHungry = true;
// var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
// console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
// console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
// console.log (lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
// console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
// console.log (lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
// console.log (lovesToPlay && 1) 

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The code evaluated to 1 because there wasn't a variable that defined puppy age. 
// I personally don't know what an age a puppy is so that is not something that's been defined as true
// There is no age range for the puppy, therefore we cannot evaluate that as a variable, all we have is the do's age. 