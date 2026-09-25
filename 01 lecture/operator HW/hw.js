// JavaScript Operators Assignment
// Saved in operators.js (as per user request; intended for js-operators-assignment.js)

console.log("========== Part A: Arithmetic Operators ==========");

// ----------------------------------------------------
// 1. Addition +
// ----------------------------------------------------
console.log("\n--- 1. Addition + ---");
// A school collected ₹15,000 from one class and ₹12,500 from another class.
let classA = 15000;
let classB = 12500;
console.log("Total collection: ₹" + (classA + classB));

// A person reads 18 pages in the morning and 25 pages in the evening.
let morningPages = 18;
let eveningPages = 25;
console.log("Total pages read:", morningPages + eveningPages);

// A shop sold 125 items on Monday and 178 items on Tuesday.
let itemsMonday = 125;
let itemsTuesday = 178;
console.log("Total items sold:", itemsMonday + itemsTuesday);

// Additional Questions (Addition +)
{
  let a = "10"; let b = 5; let result = a + b;
  console.log("Output:", result); // "105" (String concatenation)
}
{
  let x = 5; let y = "3"; let result = x + y;
  console.log("Output:", result); // "53" (String concatenation)
}
{
  let p = "Hello"; let q = "World"; let result = p + " " + q;
  console.log("Output:", result); // "Hello World"
}
{
  let m = 0; let n = false; let result = m + n;
  console.log("Output:", result); // 0 (false is coerced to 0)
}
{
  let val1 = 100; let val2 = "200"; let val3 = val1 + val2;
  console.log("Output:", val3); // "100200"
}

// ----------------------------------------------------
// 2. Subtraction -
// ----------------------------------------------------
console.log("\n--- 2. Subtraction - ---");
let totalSeats = 80;
let occupiedSeats = 53;
console.log("Empty seats:", totalSeats - occupiedSeats);

let totalMarks = 500;
let lostMarks = 35;
console.log("Final marks:", totalMarks - lostMarks);

let totalBoxes = 2500;
let sentBoxes = 875;
console.log("Remaining boxes:", totalBoxes - sentBoxes);

// Additional Questions (Subtraction -)
{
  let a = "10"; let b = 3; let result = a - b;
  console.log("Output:", result); // 7 (String "10" is coerced to number)
}
{
  let x = "20"; let y = "5"; let result = x - y;
  console.log("Output:", result); // 15
}
{
  let p = "abc"; let q = 1; let result = p - q;
  console.log("Output:", result); // NaN (Not a Number)
}
{
  let m = 10; let n = 0; let result = m / n; // Wait, prompt says Subtraction but code is m/n
  console.log("Output:", result); // Infinity
}
{
  let val = 0 / 0;
  console.log("Output:", val); // NaN
}

// ----------------------------------------------------
// 3. Multiplication *
// ----------------------------------------------------
console.log("\n--- 3. Multiplication * ---");
let costPerNotebook = 45;
let numberOfNotebooks = 8;
console.log("Cost of 8 notebooks: ₹" + (costPerNotebook * numberOfNotebooks));

let bottlesPerHour = 120;
let hours = 6;
console.log("Production in 6 hours:", bottlesPerHour * hours);

let rows = 7;
let plantsPerRow = 15;
console.log("Total plants:", rows * plantsPerRow);

// Additional Questions (Multiplication *)
{
  let a = "5"; let b = 4; let result = a * b;
  console.log("Output:", result); // 20
}
{
  let x = "10"; let y = "2"; let result = x * y;
  console.log("Output:", result); // 20
}
{
  let p = "hello"; let q = 2; let result = p * q;
  console.log("Output:", result); // NaN
}
{
  let m = 5; let n = "0"; let result = m * n;
  console.log("Output:", result); // 0
}
{
  let val1 = 3; let val2 = "4"; let val3 = val1 * val2;
  console.log("Output:", val3); // 12
}

// ----------------------------------------------------
// 4. Division /
// ----------------------------------------------------
console.log("\n--- 4. Division / ---");
let totalPencils = 144;
let students = 12;
console.log("Pencils per student:", totalPencils / students);

let distance = 360;
let travelHours = 6;
console.log("Average speed (km/h):", distance / travelHours);

let budget = 72000;
let departments = 9;
console.log("Budget per department: ₹" + (budget / departments));

// Additional Questions (Division /)
{ let a = "20"; let b = 4; console.log("Output:", a / b); } // 5
{ let x = "100"; let y = "5"; console.log("Output:", x / y); } // 20
{ let p = 10; let q = 0; console.log("Output:", p / q); } // Infinity
{ let m = -10; let n = 0; console.log("Output:", m / n); } // -Infinity
{ let val = 0 / 0; console.log("Output:", val); } // NaN

// ----------------------------------------------------
// 5. Modulus %
// ----------------------------------------------------
console.log("\n--- 5. Modulus % ---");
let totalStudents = 53;
console.log("Students left over:", totalStudents % 5);

let totalCandies = 128;
console.log("Candies left unpacked:", totalCandies % 10);

let userNumber = 25; // Example number
console.log("Is", userNumber, "even?", userNumber % 2 === 0);

let toys = 237;
console.log("Toys left after packing:", toys % 6);

let waitingPeople = 185;
let busCapacity = 40;
console.log("People left waiting:", waitingPeople % busCapacity);

// Additional Questions (Modulus %)
{ let a = 10; let b = 0; console.log("Output:", a % b); } // NaN
{ let x = 0; let y = 5; console.log("Output:", x % y); } // 0
{ let p = -10; let q = 3; console.log("Output:", p % q); } // -1
{ let m = 10; let n = -3; console.log("Output:", m % n); } // 1
{ let val1 = -10; let val2 = -3; console.log("Output:", val1 % val2); } // -1

// ----------------------------------------------------
// 6. Exponentiation **
// ----------------------------------------------------
console.log("\n--- 6. Exponentiation ** ---");
let sideCube = 6;
console.log("Volume of cube:", sideCube ** 3);

let startBacteria = 1;
console.log("Bacteria after 4 hours:", startBacteria * (2 ** 4));

let sideCells = 9;
console.log("Total cells:", sideCells ** 2);

console.log("5 to the power 4:", 5 ** 4);

let imagePixels = 1024;
console.log("Total pixels:", imagePixels ** 2);

// Additional Questions (Exponentiation **)
{ let side = -2; console.log("Output:", side ** 2); } // 4
{ let base = 2; let power = -1; console.log("Output:", base ** power); } // 0.5
{ let val = 2 ** -2; console.log("Output:", val); } // 0.25
{ let x = 3; let y = 2; console.log("Output:", x ** y); } // 9
{ let a = 10; let b = 0; console.log("Output:", a ** b); } // 1


console.log("\n========== Part B: Assignment Operators ==========");

// ----------------------------------------------------
// 1. Simple Assignment =
// ----------------------------------------------------
console.log("\n--- 1. Simple Assignment = ---");
let myAge = 25; console.log("Age:", myAge);
let penPrice = 15; console.log("Pen Price: ₹" + penPrice);
let daysInWeek = 7; console.log("Days in Week:", daysInWeek);
let city = "Delhi"; console.log("City:", city);
let piValue = 3.14159; console.log("PI Value:", piValue);

// Additional Questions
{ let a, b, c; a = b = c = 10; console.log(a, b, c); } // 10 10 10
{ let x = 5; let y = x; x = 10; console.log(x, y); } // 10 5
{ let p = 100; let q = p; let r = q; console.log(p, q, r); } // 100 100 100
{ let m = "Hello"; let n = m; m = "World"; console.log(m, n); } // World Hello
{ let val1 = 25; let val2 = val1; let val3 = val2; console.log(val1, val2, val3); } // 25 25 25

// ----------------------------------------------------
// 2. Add and Assign +=
// ----------------------------------------------------
console.log("\n--- 2. Add and Assign += ---");
let stdMarks = 200; stdMarks += 35; console.log(stdMarks);
let savings = 5000; savings += 1200; console.log(savings);
let battery = 45; battery += 30; console.log(battery + "%");
let scoreGame = 1250; scoreGame += 375; console.log(scoreGame);
let libraryBooks = 840; libraryBooks += 160; console.log(libraryBooks);

// Additional Questions
{ let a = "10"; a += 5; console.log(a); } // "105"
{ let x = 5; x += "3"; console.log(x); } // "53"
{ let p = 0; p += false; console.log(p); } // 0
{ let m = 10; m += true; console.log(m); } // 11
{ let val = "Hello"; val += "World"; console.log(val); } // "HelloWorld"

// ----------------------------------------------------
// 3. Subtract and Assign -=
// ----------------------------------------------------
console.log("\n--- 3. Subtract and Assign -= ---");
let water = 1000; water -= 375; console.log(water);
let money = 500; money -= 180; console.log(money);
let phoneBattery = 90; phoneBattery -= 45; console.log(phoneBattery + "%");
let warehouseBoxes = 2400; warehouseBoxes -= 950; console.log(warehouseBoxes);
let playerPoints = 2000; playerPoints -= 625; console.log(playerPoints);

// Additional Questions
{ let a = "20"; a -= 5; console.log(a); } // 15
{ let x = "100"; x -= "50"; console.log(x); } // 50
{ let p = 10; p -= "abc"; console.log(p); } // NaN
{ let m = 5; m -= true; console.log(m); } // 4
{ let val = 20; val -= false; console.log(val); } // 20

// ----------------------------------------------------
// 4. Multiply and Assign *=
// ----------------------------------------------------
console.log("\n--- 4. Multiply and Assign *= ---");
let pop = 5000; pop *= 3; console.log(pop);
let prod = 120; prod *= 4; console.log(prod);
let amount = 2000; amount *= 2; console.log(amount);
let gardenPlants = 50; gardenPlants *= 5; console.log(gardenPlants);
let gameScore = 150; gameScore *= 3; console.log(gameScore);

// Additional Questions
{ let a = "10"; a *= 2; console.log(a); } // 20
{ let x = "5"; x *= "4"; console.log(x); } // 20
{ let p = "hello"; p *= 2; console.log(p); } // NaN
{ let m = 5; m *= "0"; console.log(m); } // 0
{ let val = 3; val *= "4"; console.log(val); } // 12

// ----------------------------------------------------
// 5. Divide and Assign /=
// ----------------------------------------------------
console.log("\n--- 5. Divide and Assign /= ---");
let cloth = 1200; cloth /= 4; console.log(cloth);
let companyBudget = 80000; companyBudget /= 8; console.log(companyBudget);
let sugar = 960; sugar /= 6; console.log(sugar);
let dist = 450; dist /= 5; console.log(dist);
let totalMarkStudents = 2500; totalMarkStudents /= 10; console.log(totalMarkStudents);

// Additional Questions
{ let a = "100"; a /= 5; console.log(a); } // 20
{ let x = "200"; x /= "4"; console.log(x); } // 50
{ let p = 10; p /= 0; console.log(p); } // Infinity
{ let m = -10; m /= 0; console.log(m); } // -Infinity
{ let val = 0; val /= 0; console.log(val); } // NaN

// ----------------------------------------------------
// 6. Modulus and Assign %=
// ----------------------------------------------------
console.log("\n--- 6. Modulus and Assign %= ---");
let candiesLeft = 137; candiesLeft %= 10; console.log(candiesLeft);
let studentsLeft = 250; studentsLeft %= 7; console.log(studentsLeft);
let daysLeft = 1000; daysLeft %= 7; console.log(daysLeft);
let chairsLeft = 89; chairsLeft %= 5; console.log(chairsLeft);
let monthsLeft = 365; monthsLeft %= 12; console.log(monthsLeft);

// Additional Questions
{ let a = 10; a %= 0; console.log(a); } // NaN
{ let x = 0; x %= 5; console.log(x); } // 0
{ let p = -10; p %= 3; console.log(p); } // -1
{ let m = 10; m %= -3; console.log(m); } // 1
{ let val = -10; val %= -3; console.log(val); } // -1

// ----------------------------------------------------
// 7. Exponentiation and Assign **=
// ----------------------------------------------------
console.log("\n--- 7. Exponentiation and Assign **= ---");
let gardenSide = 10; gardenSide **= 2; console.log(gardenSide);
let edge = 4; edge **= 3; console.log(edge);
let growthFactor = 3; growthFactor **= 2; console.log(growthFactor);

// Additional Questions
{ let side = -2; side **= 2; console.log(side); } // 4
{ let base = 2; base **= -1; console.log(base); } // 0.5
{ let val = 2; val **= -2; console.log(val); } // 0.25
{ let x = 3; x **= 0; console.log(x); } // 1
{ let a = 10; a **= 1; console.log(a); } // 10


console.log("\n========== Part C: Comparison Operators ==========");

// ----------------------------------------------------
// 1. Loose Equality ==
// ----------------------------------------------------
console.log("\n--- 1. Loose Equality == ---");
let storedPass = 1234; let inputPass = "1234"; console.log(storedPass == inputPass); // true
let userAnswer = 0; let defaultAnswer = false; console.log(userAnswer == defaultAnswer); // true
let userInput = ""; let flag = false; console.log(userInput == flag); // true
let backendVal = null; let frontendVal = undefined; console.log(backendVal == frontendVal); // true
let score1 = 500; let score2 = "500"; console.log(score1 == score2); // true

// Additional
{ let a = 0; let b = false; console.log(a == b); } // true
{ let x = ""; let y = false; console.log(x == y); } // true
{ let p = "0"; let q = 0; console.log(p == q); } // true
{ let m = []; let n = 0; console.log(m == n); } // true
{ let val1 = []; let val2 = false; console.log(val1 == val2); } // true

// ----------------------------------------------------
// 2. Loose Inequality !=
// ----------------------------------------------------
console.log("\n--- 2. Loose Inequality != ---");
console.log("SAVE10" != "SAVE20"); // true
console.log("admin" != "guest"); // true
console.log(42 != "40"); // true
console.log("" != false); // false
console.log(null != 101); // true

// Additional
{ let a = 0; let b = false; console.log(a != b); } // false
{ let x = ""; let y = false; console.log(x != y); } // false
{ let p = "0"; let q = 0; console.log(p != q); } // false
{ let m = null; let n = undefined; console.log(m != n); } // false
{ let val1 = []; let val2 = 0; console.log(val1 != val2); } // false

// ----------------------------------------------------
// 3. Strict Equality ===
// ----------------------------------------------------
console.log("\n--- 3. Strict Equality === ---");
console.log(1234 === "1234"); // false
console.log(1234567890 === 1234567890); // true
console.log(true === 1); // false
console.log(null === undefined); // false
console.log(85 === 85); // true

// Additional
{ let a = 0; let b = false; console.log(a === b); } // false
{ let x = ""; let y = false; console.log(x === y); } // false
{ let p = "0"; let q = 0; console.log(p === q); } // false
{ let m = null; let n = undefined; console.log(m === n); } // false
{ let val = NaN; console.log(val === val); } // false (NaN is never equal to itself)

// ----------------------------------------------------
// 4. Strict Inequality !==
// ----------------------------------------------------
console.log("\n--- 4. Strict Inequality !== ---");
console.log("101" !== 101); // true
console.log(true !== 1); // true
console.log("abc123" !== "abc124"); // true
console.log(null !== undefined); // true
console.log(10 !== 20); // true

// Additional
{ let a = 0; let b = false; console.log(a !== b); } // true
{ let x = ""; let y = false; console.log(x !== y); } // true
{ let p = "0"; let q = 0; console.log(p !== q); } // true
{ let m = null; let n = undefined; console.log(m !== n); } // true
{ let val = NaN; console.log(val !== val); } // true

// ----------------------------------------------------
// 5. Greater Than >
// ----------------------------------------------------
console.log("\n--- 5. Greater Than > ---");
console.log(20 > 18); // true
console.log(650 > 500); // true
console.log(1200 > 1000); // true
console.log(40000 > 30000); // true
console.log(11000 > 10000); // true

// Additional
{ let a = 5, b = 5; console.log(a > b); } // false
{ let x = "10", y = "2"; console.log(x > y); } // false (String comparison: "1" < "2")
{ let p = "5", q = 10; console.log(p > q); } // false (p coerced to 5)
{ let m = null, n = 0; console.log(m > n); } // false
{ let val = undefined; console.log(val > 0); } // false

// ----------------------------------------------------
// 6. Less Than <
// ----------------------------------------------------
console.log("\n--- 6. Less Than < ---");
console.log(30 < 35); // true
console.log(8000 < 10000); // true
console.log(7 < 10); // true
console.log(40 < 50); // true
console.log(4 < 5); // true

// Additional
{ let a = 5, b = 5; console.log(a < b); } // false
{ let x = "10", y = "2"; console.log(x < y); } // true (String comparison)
{ let p = null, q = 1; console.log(p < q); } // true (null is coerced to 0)
{ let m = null, n = 0; console.log(m < n); } // false
{ let val = undefined; console.log(val < 0); } // false

// ----------------------------------------------------
// 7. Greater Than or Equal >=
// ----------------------------------------------------
console.log("\n--- 7. Greater Than or Equal >= ---");
console.log(18 >= 18); // true
console.log(75 >= 75); // true
console.log(14 >= 13); // true
console.log(500 >= 500); // true
console.log(3 >= 2); // true

// Additional
{ let a = 5, b = 5; console.log(a >= b); } // true
{ let x = null, y = 0; console.log(x >= y); } // true
{ let p = undefined, q = 0; console.log(p >= q); } // false
{ let m = "5", n = 5; console.log(m >= n); } // true
{ let val = "10", limit = 5; console.log(val >= limit); } // true

// ----------------------------------------------------
// 8. Less Than or Equal <=
// ----------------------------------------------------
console.log("\n--- 8. Less Than or Equal <= ---");
console.log(7 <= 8); // true
console.log(5 <= 5); // true
console.log(12 <= 12); // true
console.log(9.5 <= 10); // true
console.log(40 <= 40); // true

// Additional
{ let a = 5, b = 5; console.log(a <= b); } // true
{ let x = null, y = 0; console.log(x <= y); } // true
{ let p = undefined, q = 0; console.log(p <= q); } // false
{ let m = "5", n = 5; console.log(m <= n); } // true
{ let val = "3", limit = 5; console.log(val <= limit); } // true


console.log("\n========== Part D: Logical Operators ==========");

// ----------------------------------------------------
// 1. Logical AND &&
// ----------------------------------------------------
console.log("\n--- 1. Logical AND && ---");
let user = "admin"; let pass = 1234; console.log(user === "admin" && pass === 1234);
let isLoggedIn = true; let hasPermission = true; console.log(isLoggedIn && hasPermission);
let inStock = true; let productPrice = 800; console.log(inStock && productPrice < 1000);
let studentMarks = 75; let studentAtt = 80; console.log(studentMarks > 65 && studentAtt > 70);
let isWeekend = true; let isHoliday = false; console.log(isWeekend && isHoliday);

// Additional
{ let a = 0, b = 10; console.log(a && b); } // 0
{ let x = 5, y = 10; console.log((x > 3 && y) || 0); } // 10
{ let p = "Hello", q = "", r = "World"; console.log(p && q && r); } // ""
{ let val = 5; let condition = val && (val = 0); console.log(condition); console.log(val); } // 0 \n 0
{ let x = 10, y = 20; console.log((x && y) && (x > y)); } // false

// ----------------------------------------------------
// 2. Logical OR ||
// ----------------------------------------------------
console.log("\n--- 2. Logical OR || ---");
let passwordCorrect = true; let otpValid = false; console.log(passwordCorrect || otpValid);
let isMember = false; let hasCoupon = true; console.log(isMember || hasCoupon);
let pAge = 16; let pHeight = 155; console.log(pAge > 18 || pHeight > 150);
let emailGiven = true; let phoneGiven = false; console.log(emailGiven || phoneGiven);
let gameLvlScore = 900; let timeBonus = true; console.log(gameLvlScore > 1000 || timeBonus);

// Additional
{ let a=0, b=false, c="", d=null, e=42; console.log(a || b || c || d || e); } // 42
{ let x = "Hello" || 0; let y = 0 || "Hi"; console.log(x, y); } // "Hello" "Hi"
{ let a = 10, b = 20; console.log((a < 5) || (b > 15)); } // true
{ let val = 5; let condition = val || (val = 0); console.log(condition); console.log(val); } // 5 \n 5
{ let x = "" || 0 || false || null || undefined || "OK"; console.log(x); } // "OK"

// ----------------------------------------------------
// 3. Logical NOT !
// ----------------------------------------------------
console.log("\n--- 3. Logical NOT ! ---");
let isBanned = false; console.log(!isBanned);
let isCompleted = false; console.log(!isCompleted);
let isOn = true; console.log(!isOn);
let isActive = false; console.log(!isActive);
let isReadOnly = false; console.log(!isReadOnly);

// Additional
{ let a = 0, b = 1; console.log(!a, !b); } // true false
{ let x = "Hello", y = ""; console.log(!x, !y); } // false true
{ let val = 5; console.log(!val); } // false
{ let a = 10, b = 20; console.log(!(a && b)); } // false
{ let x = 0, y = 1; console.log(!(x || y)); } // false

// ----------------------------------------------------
// 4. Mixed Logical Operators (&&, ||, !)
// ----------------------------------------------------
console.log("\n--- 4. Mixed Logical Operators ---");
let memberCheck = true; let bannedCheck = false; console.log(memberCheck && !bannedCheck);
let st = true; let sen = false; let ban = true; console.log((st || sen) && !ban);
let nameG = true; let emailG = false; let phoneG = true; console.log(nameG && (emailG || phoneG));
let isAdmin = true; let hasToken = false; let isSuspended = false; console.log((isAdmin || hasToken) && !isSuspended);
let scoreFinal = 1200; let tBonus = false; let eLife = true; console.log(scoreFinal > 1000 && (tBonus || eLife));

// Additional
{ let a = 0, b = 10, c = 20; console.log(a || b && c); } // 20
{ let p = true, q = false, r = true; console.log(p && q || r); } // true
{ let x = 10, y = 20; console.log(!(x && y) || (x > 5 && y < 30) && true); } // true
{ let a = 5, b = 0, c = 10; console.log(a && b || c); } // 10
{ let val1 = false, val2 = true, val3 = false; console.log(!(val1 || val2) && val3 || true); } // true