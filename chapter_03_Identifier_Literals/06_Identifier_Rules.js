// ============================================
// JavaScript Identifier Rules Examples
// ============================================

// RULE 1: Identifiers must start with a letter, underscore (_), or dollar sign ($)
// ============================================

// Valid - Starting with letter
var name = "John";
var firstName = "John";
var Name = "John";

// Valid - Starting with underscore
var _name = "John";
var __private = "secret";
var _private_name = "John";

// Valid - Starting with dollar sign
var $name = "John";
var $firstName = "John";
var $__special = "special";

console.log("Rule 1 - Valid Identifiers:");
console.log(name, firstName, _name, $name);

// ============================================
// RULE 2: Identifiers can contain letters, digits, underscores, and dollar signs
// ============================================

// Valid - Contains digits (but NOT starting with digit)
var name1 = "John";
var firstName2LastName = "John Doe";
var _age25 = 25;
var $price100 = 100;

// Valid - Mix of letters, digits, underscores, and dollar signs
var myVar_2 = "value";
var $my_var_2 = "value";
var _myVar$2 = "value";
var my$Var_2_Name = "value";

console.log("\nRule 2 - Identifiers with digits, underscores, dollar signs:");
console.log(name1, firstName2LastName, _age25, $price100);

// ============================================
// RULE 3: Identifiers are Case-Sensitive
// ============================================

// These are all different identifiers
var age = 25;
var Age = 30;
var AGE = 35;
var aGe = 40;

console.log("\nRule 3 - Case Sensitivity:");
console.log("age:", age);
console.log("Age:", Age);
console.log("AGE:", AGE);
console.log("aGe:", aGe);

// ============================================
// RULE 4: Cannot start with a number (INVALID)
// ============================================

// INVALID - These will cause syntax errors
// var 1name = "John";           // ERROR
// var 2firstName = "John";      // ERROR
// var 123abc = "value";         // ERROR

console.log("\nRule 4 - Invalid (starting with number):");
console.log("// var 1name = 'John';  ← INVALID SYNTAX");

// ============================================
// RULE 5: Cannot use Reserved Words as identifiers
// ============================================

// INVALID - Reserved words cannot be used
// var function = "test";        // ERROR - 'function' is reserved
// var class = "test";           // ERROR - 'class' is reserved
// var return = "test";          // ERROR - 'return' is reserved
// var var = "test";             // ERROR - 'var' is reserved
// var if = "test";              // ERROR - 'if' is reserved
// var for = "test";             // ERROR - 'for' is reserved
// var while = "test";           // ERROR - 'while' is reserved
// var let = "test";             // ERROR - 'let' is reserved
// var const = "test";           // ERROR - 'const' is reserved

console.log("\nRule 5 - Invalid Reserved Words:");
console.log("Cannot use: function, class, return, var, if, for, while, let, const, etc.");

// ============================================
// RULE 6: Special characters are NOT allowed (except _ and $)
// ============================================

// INVALID - Special characters not allowed
// var first-name = "John";      // ERROR - hyphen not allowed
// var first name = "John";      // ERROR - space not allowed
// var first.name = "John";      // ERROR - dot not allowed
// var first@name = "John";      // ERROR - @ not allowed
// var first#name = "John";      // ERROR - # not allowed
// var first&name = "John";      // ERROR - & not allowed
// var first%name = "John";      // ERROR - % not allowed

console.log("\nRule 6 - Invalid (special characters):");
console.log("Cannot use: -, space, ., @, #, &, %, etc.");

// ============================================
// VALID Identifier Examples (Best Practices)
// ============================================

// camelCase (common convention in JS)
var firstName = "John";
var lastName = "Doe";
var emailAddress = "john@example.com";
var calculateTotalPrice = function () { };

// PascalCase (for constructors/classes)
function MyConstructor() { }
function CalculatePrice() { }

// snake_case with underscore (sometimes used)
var first_name = "John";
var last_name = "Doe";
var _privateVariable = "secret";

// Using dollar sign (sometimes used in jQuery or special variables)
var $element = "DOM element";
var $scope = "Angular scope";

// All valid combinations
var a = 1;
var _a = 2;
var $a = 3;
var a1 = 4;
var _a1 = 5;
var $a1 = 6;
var a_1 = 7;
var a$1 = 8;
var _$a1 = 9;

console.log("\nValid Identifier Examples:");
console.log({ firstName, lastName, emailAddress });
console.log({ _privateVariable, $element, a, _a, $a, a1 });

// ============================================
// SUMMARY OF IDENTIFIER RULES
// ============================================

console.log("\n========== IDENTIFIER RULES SUMMARY ==========");
console.log("✓ Must start with: letter, underscore (_), or dollar sign ($)");
console.log("✓ Can contain: letters, digits (0-9), underscores (_), dollar signs ($)");
console.log("✓ Are case-sensitive (age ≠ Age ≠ AGE)");
console.log("✗ Cannot start with a number");
console.log("✗ Cannot use reserved words (function, class, return, var, etc.)");
console.log("✗ Cannot contain special characters (except _ and $)");
console.log("✗ Cannot contain spaces");
console.log("✓ Recommended: Use camelCase for variables/functions");
console.log("✓ Recommended: Use PascalCase for constructors/classes");
console.log("✓ Recommended: Use descriptive, meaningful names");
