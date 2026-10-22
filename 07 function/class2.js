// function sumOfThree(a,b,c){
//   return (a+b+c);
// };
// let result=sumOfThree(10,20,30)
// console.log(result)

// function avgOfTwo(a,b,){
//   return (a+b)/2;
// };
// let result=avgOfTwo(50,70)
// console.log(result)

// functional scope

// function showMarks(){
//   let marks=90;
//   console.log(marks);
// }
// showMarks();
// console.log(marks);



// let marks=90;

// function showMarks(){
//   console.log(marks);

// }
// showMarks();
// console.log(marks);



// function displayAge(){
//   let age=20;
//   console.log(age);     // 20  
//  }
// displayAge();
// console.log(age)     // Error -> Age is not defined


// let course = "JavaScript"
// function printCourse(){
//   console.log(course)
// }
// printCourse(course)

// function reportCard(name, m1,m2){
//   let total = m1+m2;
//   let avg = (m1+m2)/2;
//   return`The student ${name} getting a total marks= ${total} and an averaghe marks= ${avg}`
// }
// console.log(reportCard("Aniket",98,85))

// function checkPass(avg) {
//     if (avg >= 40) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// console.log(checkPass(65)); 
// console.log(checkPass(30)); 


// function studentReport(name,m1,m2){
//   function total(m1,m2){
//     return m1+m2;
//   };
// return `The student ${name} gets a total marks = ${totalMarks}`
// };
// console.log(studentReport("Bijoy" , 75,67))

// function main(){
//   function help(){
//     return "Helper function called"
//   };
//   let res = helper();
//   return res;
// };
// console.log(main())
// function cube(n){
//     return n**3;
// }
// console.log(cube(4))
// function isPositive(num) {
//   return num > 0;
// }
// console.log(isPositive(10)); 
// console.log(isPositive(-5));
// function studentreport(name,m1,m2,m3){
//     let total=m1+m2+m3;
//     let average=(total/3).toFixed(2)
//     return "the student"+name+"getting a total number="+total+"and an average ="+avg
// }let result= studentreport("aniket",87,90,92);
// console.log(result)
// function main() {
//     function helper() {
//         return "Helper function called";
//     }
//     return helper();
// }
// console.log(main());
// function calculateDimention (r){

//     function findArea (r){
//         let area = (22/7)*r*r
//         return `${area}`
//     }
//     return findArea(r)
//     function findParameter (r){
//         let parameter = 2*(22/7)*r
//         return parameter
//     }
// }
// console.log(calculateDimention(2))
