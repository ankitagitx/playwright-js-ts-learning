// Confusing Comparison Cases with == and ===

// ============================================
// Case 1: String to Number Coercion
// ============================================
console.log("=== String to Number Coercion ===");
console.log("5" == 5); // true (loose equality coerces string to number)
console.log("5" === 5); // false (strict equality, different types)

console.log("10" == 10); // true
console.log("10" === 10); // false

// ============================================
// Case 2: Boolean to Number Coercion
// ============================================
console.log("\n=== Boolean to Number Coercion ===");
console.log(true == 1); // true (true coerces to 1)
console.log(true === 1); // false

console.log(false == 0); // true (false coerces to 0)
console.log(false === 0); // false

console.log(true == "1"); // true (both coerce to 1)
console.log(true === "1"); // false

// ============================================
// Case 3: Empty String and Zero
// ============================================
console.log("\n=== Empty String and Zero ===");
console.log(0 == ""); // true (empty string coerces to 0)
console.log(0 === ""); // false

console.log(false == ""); // true (both coerce to 0)
console.log(false === ""); // false

console.log("" == ""); // true (same type and value)
console.log("" === ""); // true

// ============================================
// Case 4: Null and Undefined
// ============================================
console.log("\n=== Null and Undefined ===");
console.log(null == undefined); // true (special case in loose equality)
console.log(null === undefined); // false

console.log(null == 0); // false (null doesn't coerce to 0)
console.log(null === 0); // false

console.log(undefined == 0); // false
console.log(undefined === 0); // false

// ============================================
// Case 5: Whitespace String Coercion
// ============================================
console.log("\n=== Whitespace String Coercion ===");
console.log(" " == 0); // true (whitespace string coerces to 0)
console.log(" " === 0); // false

console.log("\t" == 0); // true (tab coerces to 0)
console.log("\t" === 0); // false

console.log("\n" == 0); // true (newline coerces to 0)
console.log("\n" === 0); // false

// ============================================
// Case 6: Array Coercion
// ============================================
console.log("\n=== Array Coercion ===");
console.log([] == ""); // true (empty array coerces to empty string)
console.log([] === ""); // false

console.log([] == 0); // true (empty array coerces to 0)
console.log([] === 0); // false

console.log([0] == 0); // true (array with 0 coerces to 0)
console.log([0] === 0); // false

console.log([1] == 1); // true
console.log([1] === 1); // false

console.log(["1"] == "1"); // true
console.log(["1"] === "1"); // false

// ============================================
// Case 7: Object Coercion
// ============================================
console.log("\n=== Object Coercion ===");
console.log({} == "[object Object]"); // true
console.log({} === "[object Object]"); // false

console.log({} == {}); // false (different object references)
console.log({} === {}); // false

let obj = {};
console.log(obj == obj); // true (same reference)
console.log(obj === obj); // true

// ============================================
// Case 8: Type Coercion Chain
// ============================================
console.log("\n=== Type Coercion Chain ===");
console.log("2" == 2); // true
console.log("2" == true); // false (true coerces to 1, not 2)
console.log("2" == false); // false

console.log(true == 1); // true
console.log("1" == true); // true
console.log("1" == 1); // true

// ============================================
// Case 9: NaN Comparison (Always False!)
// ============================================
console.log("\n=== NaN Comparison ===");
console.log(NaN == NaN); // false (NaN never equals anything, even itself!)
console.log(NaN === NaN); // false

console.log(0 / 0 == NaN); // false
console.log(0 / 0 === NaN); // false

// ============================================
// Case 10: Negative Zero
// ============================================
console.log("\n=== Negative Zero ===");
console.log(-0 == 0); // true
console.log(-0 === 0); // true (they are considered equal in strict equality)

console.log(Object.is(-0, 0)); // false (Object.is distinguishes -0 from 0)

// ============================================
// Best Practice: Always use === instead of ==
// ============================================
console.log("\n=== RECOMMENDATION ===");
console.log("Always use === (strict equality) to avoid unexpected type coercion!");
console.log("This prevents confusing and hard-to-debug comparison results.");
