console.log("hello world");

// §1

// 1. DRY = Don't Repeat Yourself

/* 2.
1. const = "constant" variable does not change
2. let = variable that can be changed
3. var = "variable" - outdated, it's not usually used
*/

// §2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

const test = [
  a < b,
  c > d,
  "Name" == "Name",
  a < b < c,
  a != a < d, //why is a != a? Shouldn't it be a < a?
  e != "Kevin",
  48 == "48",
  f != e,
];

let length = test.length;

for (let num = 0; num < test.length; num++) {
  console.log(num + 1 + ". " + test[num]);
}

let g = 0;
console.log(g);

g = b + c;
console.log(g);

/*
1. Used const for the equation array because that's a given and will not change. Used let for the loop because otherwise I would have to write a console.log for each test.
2. Not using variables doesn't do anything. I could have used console.log(fullEquation) for each test to get a boolean answer
3. 10 = g; gets you a syntax error. I assume it's because the left side is a number, which can't be a variable.
*/

let equation = a < (b || f) === !f && e !== c;
console.log(equation);

// §3

// INFINITE LOOP
/*
while (true) {
    /while what is true?
	console.log('Do not run this loop');
}
*/

// INFINITE LOOP II
/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
*/
// This is an infinite loop, because even though the loop wants to change runProgram = false, it's a const and it cannot be changed. Expected output is "do not run this loop" over and over.

// sets variable "letters" to "A"
let letters = "A";

// sets variable "i" to 0.
let i = 0;

// as long as i is smaller than 20...
while (i < 20) {
  // concat "A" to the current value of "letters"
  letters += "A";
  // change value of i, add 1 to current value, then run the formula again
  i++;
  // end of loop
}
console.log(letters);
// expected result: "AAAAAAAAAAAAAAAAAAAA" (20 As)

// §4
// FOR LOOP CONTROL PANEL
// "for" loop declares the initial variable, sets the condition, and gives the formula to change the variable
// it's shorter
// they do the same thing
