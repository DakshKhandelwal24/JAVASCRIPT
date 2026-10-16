// ////////////////////////////////////////////////////////////////////////////////
// -----------------------------------------------------------------------------------

// // question = 1 
 
// // A function in JavaScript is a reusable block of code designed to perform a specific task. It executes when it is called or invoked.
// // Four Advantages of Using Functions
// // 1. Code Reusability: A function can be used multiple times without rewriting the same code.
// // 2. Reduces Code Duplication: Functions avoid writing the same statements repeatedly.
// // 3. Easy Debugging: Functions make it easier to identify and fix errors in a program.
// // 4. Improves Readability: Functions organize code into smaller, manageable blocks, making it easier to understand and maintain.

// // question = 2 

// function greetStudent (name){
//     return  `Hello ${name} welcome to codingGita! .`
// }
// console.log(greetStudent("jitesh"))
// console.log(greetStudent("praveen"))

// // question = 3 

// // In JavaScript, hoisting in the context of function declarations is a behavior where the JavaScript engine allocates memory for a function declaration and makes it fully available at the top of its scope before the code actually executes

// // question = 4 

// let calculateAverage = function(a,b,c){
//     return (a+b+c)/3
// }

// // question = 5 

// // In programming, the primary difference is that parameters are the variables defined in a function's declaration, while arguments are the actual values passed into those variables when the function is called

// function multiply(x, y) {     // parameter are x and y 
//     return x * y;
// }
// console.log(multiply(12, 5));    // arguments are 12 and 5 


// // question = 6 

// function isEven (a){
//     return (a % 2 == 0)
// }
// console.log(isEven(7))

// // question == 7 

// function findPercentage (obtainedMarks,totalMarks){
//     return `percentage = ${(obtainedMarks/totalMarks)*100}`
// }
// console.log(findPercentage(456,500))

// // question = 8 

// // when function return if it does not contain a return statement = undefined

// function names(){

// }
// console.log(names(3))

// // question = 9 

// function calculateSimpleInterest(principal, rate, time){
//     return `Simple intrest = ${SI = (principal * rate * time) / 100}`
// }
// console.log(calculateSimpleInterest(10000,5 ,2))

// // question = 10 

// // • Function Declarations are completely hoisted to the top of their enclosing scope. This means you can call the function before it appears in your code.
// // • Function Expressions are not hoisted in the same way because they are treated as variable assignments. They are only created when the interpreter reaches that specific line of code, meaning you cannot call them before they are defined without throwing an error 

////

// function studentData(name , marks){
//     return `Student ${name} has scored ${marks} marks.`
// }
// console.log(studentData("bhavesh",99))

// // question = 11 

// // In programming, scope determines where a variable can be seen and accessed within your code. The fundamental difference between local scope and global scope revolves around whether a variable is declared inside or outside of a function

// ////

// function displayAge (){
//     let age = 20 ;
//     console.log(age)
//                                                         // ReferenceError: age is not defined
// }
// console.log(age)
// displayAge()

// let course = "javascript" ;
// function value(){
//     return course
// }
// console.log(value())

// // question = 12 

// function analyzeStudent (name, m1 ,m2 , m3 ){
//     let totalMarks = m1+m2+m3 ;
//     let average = (m1+m2+m3)/3 ;
//     return `${name} scored total ${totalMarks} with average ${average}.`

// }
// console.log(analyzeStudent("jitesh",40,40,40))

// // question = 13 

// // A nested function (or inner function) is a function defined completely inside the body of another (outer or parent) function.

// function studentReport (name , m1, m2 ,m3){
//     function total(m1 , m2 , m3 ){
//         return m1+ m2 + m3
//     }
//     return `"${name} total marks: ${total(m1,m2,m3)}"`
// }
// console.log(studentReport("jitesh",40,40,40))

// // question = 14
 
// function generateReport (name, m1, m2, m3){
//     let average = (m1+m2+m3)/3;
//     if (average >= 40 ){
//         console.log("Pass!!")
//     }else{
//         console.log("Fail!!")
//     }
//     return `Student name ${name} , Total marks ${m1+m2+m3} , Average ${(m1+m2+m3)/3}`
    
// }
// console.log(generateReport("jitesh",30,30,30))

// // question = 15 

// function sumOfThree(a, b, c){
//     return `Sum ${a+b+c}`
// }
// console.log(sumOfThree(1,2,3))

// function averageOfTwo(x, y){
//     return `Average ${(x+y)/2}`
// }
// console.log(averageOfTwo(2,3))

// function maxOfTwo(a, b) {
//     if (a>b){
//         console.log(`Max is ${a}`)
//     }else if(a==b){
//         console.log(`both are equal`)
//     }else{
//         console.log(`Max is ${b}`)
//     }
    
// }
// maxOfTwo(2,3)

// function fullName(first, last){
//     return `Full name ${first} ${last}`
// }
// console.log(fullName("jitesh","choudhary"))

// // question = 16