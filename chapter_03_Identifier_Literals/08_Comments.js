// ============================================
// JavaScript Comments - Single and Multi-line
// ============================================

// ============================================
// 1. SINGLE-LINE COMMENTS
// ============================================
// Single-line comments start with two forward slashes (//)
// Everything after // on that line is a comment
// The JavaScript engine ignores these lines

console.log("========== SINGLE-LINE COMMENTS ==========\n");

// This is a single-line comment
var firstName = "John"; // This variable stores the user's first name

// You can have multiple single-line comments
// Comment line 1
// Comment line 2
// Comment line 3
var lastName = "Doe"; // Last name of the user

// Comments can explain what the code does
var age = 30;

// Comments can explain WHY the code does something
// Using 30 as default age because most registrations happen around this age
var defaultAge = 30;

// Comments can provide context
// Calculate total price including 10% tax
function calculatePrice(basePrice) {
    return basePrice * 1.1;
}

console.log("Single-line comment example: calculatePrice(100) =", calculatePrice(100));

// You can comment out code (useful for debugging)
// var disabledVariable = "This code is temporarily disabled";

// Multiple comments for complex logic
// Step 1: Get user input
var userInput = "12345";
// Step 2: Validate input
var isValid = userInput.length > 0;
// Step 3: Process if valid
if (isValid) {
    console.log("Input is valid");
}

console.log("");

// ============================================
// 2. MULTI-LINE COMMENTS
// ============================================
// Multi-line comments start with /* and end with */
// Everything between /* and */ is a comment
// Can span multiple lines

console.log("========== MULTI-LINE COMMENTS ==========\n");

/*
This is a multi-line comment.
It can span multiple lines.
The JavaScript engine ignores all of this.
*/

/*
Multi-line comments are useful for:
1. Explaining larger blocks of code
2. Writing detailed documentation
3. Writing license information
4. Disabling large chunks of code
*/

var user = {
    /* User identification */
    id: 1,
    firstName: "John",
    lastName: "Doe",

    /* Contact information */
    email: "john@example.com",
    phone: "1234567890",

    /* Account status */
    isActive: true,
    createdAt: "2024-01-15"
};

console.log("Multi-line comment example - User object:", user);

/*
Function to calculate discount based on purchase amount
Parameters:
    - amount: the purchase amount
    - discountPercent: the discount percentage to apply
Returns:
    - the final price after discount
*/
function applyDiscount(amount, discountPercent) {
    return amount * (1 - discountPercent / 100);
}

console.log("Discount calculation: applyDiscount(100, 10) =", applyDiscount(100, 10));

console.log("");

// ============================================
// 3. PRACTICAL EXAMPLES - COMBINING BOTH TYPES
// ============================================

console.log("========== PRACTICAL EXAMPLES ==========\n");

// Example 1: Function with documentation
/*
Function: getUserProfile
Description: Fetches user profile from database
Parameters:
    - userId (Number): The user ID to fetch
Returns:
    - Object: User profile object with name, email, status
Created: 2024-01-15
Last Updated: 2024-01-20
*/
function getUserProfile(userId) {
    // Validate input
    if (!userId || userId <= 0) {
        return null; // Return null for invalid IDs
    }

    // Fetch user data (simulated)
    var user = {
        id: userId,
        name: "John Doe",
        email: "john@example.com",
        status: "active"
    };

    return user; // Return the user object
}

var userProfile = getUserProfile(1);
console.log("User Profile:", userProfile);

// Example 2: Complex calculation with comments
/*
Order Processing Logic:
1. Calculate subtotal from items
2. Apply coupon discount if available
3. Calculate tax on discounted amount
4. Add shipping cost
5. Return final total
*/
function calculateOrderTotal(subtotal, couponDiscount, taxRate, shippingCost) {
    // Apply coupon discount
    var discountedAmount = subtotal - couponDiscount;

    // Calculate tax on discounted amount
    var tax = discountedAmount * taxRate;

    // Add shipping cost
    var total = discountedAmount + tax + shippingCost;

    return total; // Return final total
}

var orderTotal = calculateOrderTotal(100, 10, 0.1, 5);
console.log("Order Total:", orderTotal);

console.log("");

// ============================================
// 4. COMMENTED OUT CODE (Debugging)
// ============================================

console.log("========== COMMENTED OUT CODE ==========\n");

// Sometimes you want to disable code without deleting it
// You can comment it out temporarily

// Option 1: Single-line comment for one line
// console.log("This line is disabled");

// Option 2: Single-line comments for multiple lines
// var test1 = "disabled";
// var test2 = "also disabled";
// console.log(test1, test2);

// Option 3: Multi-line comment for large blocks
/*
function disabledFunction() {
    var data = [1, 2, 3, 4, 5];
    var sum = data.reduce((a, b) => a + b, 0);
    console.log("Sum:", sum);
    return sum;
}
console.log("Function result:", disabledFunction());
*/

console.log("Code examples above are commented out");
console.log("");

// ============================================
// 5. BEST PRACTICES FOR COMMENTS
// ============================================

console.log("========== BEST PRACTICES ==========\n");

// GOOD: Clear, concise comment explaining WHY
var discountRate = 0.15; // 15% discount for bulk purchases

// BAD: Obvious comment that states what the code does
// var number = 5; // Set number to 5

// GOOD: Multi-line comment for complex logic
/*
Algorithm to find the maximum value in array
Time Complexity: O(n)
Space Complexity: O(1)
*/
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max value in [3, 7, 2, 9, 1]:", findMax([3, 7, 2, 9, 1]));

// GOOD: Comment explaining the non-obvious fix
var result = 0.1 + 0.2; // Note: Due to floating point precision, this might not equal 0.3

// GOOD: Comments for TODO items
// TODO: Add error handling for API calls
// TODO: Add validation for user input
// FIXME: Bug - discount calculation is incorrect for certain amounts

console.log("");

// ============================================
// 6. COMMENT STYLES AND FORMATS
// ============================================

console.log("========== COMMENT STYLES ==========\n");

// === Format 1: Simple comment ===
// This is a simple single-line comment

// === Format 2: Header style ===
// ============================================
// This is a section header comment
// ============================================

// === Format 3: Inline comment ===
var price = 100; // Store the item price

// === Format 4: Documentation style ===
/**
 * Function description
 * @param {type} paramName - Parameter description
 * @returns {type} Return description
 * Example: functionName(param) returns result
 */
function sampleFunction(param) {
    return param * 2;
}

// === Format 5: Code block comment ===
/*
This is a large code block comment
It can explain multiple lines of code
Or provide detailed information
about what follows
*/

console.log("Sample function result:", sampleFunction(5));

console.log("");

// ============================================
// SUMMARY
// ============================================

console.log("========== SUMMARY ==========");
console.log("Single-line comments: // comment text");
console.log("Multi-line comments:  /* comment text */");
console.log("");
console.log("✓ Comments are ignored by JavaScript engine");
console.log("✓ Use comments to explain WHY, not WHAT");
console.log("✓ Keep comments clear and concise");
console.log("✓ Use multi-line for longer explanations");
console.log("✓ Use single-line for quick notes");
console.log("✓ Good comments improve code readability");
console.log("✓ Outdated comments are worse than no comments");
