import largestOfTwoNumbers from "./module-defaultexport.mjs";
import addTwoNumbers from "./module-namedexport.mjs";
import { multiply } from "./module-namedexport.mjs";

let b = largestOfTwoNumbers(9,4);
console.log(b);

let c = addTwoNumbers(3,4);
console.log(c);

let d = multiply(3,5);
console.log(d);