// ============================================
// JavaScript Naming Conventions/Cases
// ============================================

console.log("========== NAMING CONVENTIONS IN JAVASCRIPT ==========\n");

// ============================================
// 1. camelCase (Most Common in JavaScript)
// ============================================
console.log("1. camelCase - Most Common for Variables & Functions:");
console.log("Format: First word lowercase, subsequent words capitalized, no spaces/underscores\n");

// Variable names
var firstName = "John";
var lastName = "Doe";
var emailAddress = "john@example.com";
var userPhoneNumber = "1234567890";
var isActive = true;
var hasPermission = false;

// Function names
function calculateTotalPrice() {
    return 100 * 1.1;
}

function getUserProfile() {
    return { name: "John", age: 30 };
}

function validateEmailAddress(email) {
    return email.includes("@");
}

// Object properties
var user = {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    phoneNumber: "1234567890",
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
};

console.log("camelCase Examples:");
console.log({ firstName, lastName, emailAddress, userPhoneNumber, isActive });
console.log("Function: calculateTotalPrice() =", calculateTotalPrice());
console.log("Function: getUserProfile() =", getUserProfile());
console.log("");

// ============================================
// 2. PascalCase (for Classes/Constructors)
// ============================================
console.log("2. PascalCase - For Classes & Constructors:");
console.log("Format: All words capitalized, no spaces/underscores\n");

// Constructor functions
function UserProfile() {
    this.name = "John";
    this.age = 30;
}

function CalculatePrice() {
    this.basePrice = 100;
    this.taxRate = 0.1;
}

// Class-like behavior
function Database() {
    this.connect = function () {
        return "Connected to database";
    };
}

// React-style Components (if using React)
function MyComponent() {
    return "Component rendered";
}

function HeaderComponent() {
    return "Header rendered";
}

console.log("PascalCase Examples:");
console.log("Constructor: new UserProfile() created");
console.log("Constructor: new CalculatePrice() created");
console.log("Function: MyComponent() =", MyComponent());
console.log("");

// ============================================
// 3. snake_case (Less Common in JS, More in Python/SQL)
// ============================================
console.log("3. snake_case - Less Common in JS, All lowercase with underscores:");
console.log("Format: All lowercase, words separated by underscores\n");

// Sometimes used for private variables
var _first_name = "John";
var _last_name = "Doe";
var _email_address = "john@example.com";
var _user_phone_number = "1234567890";
var _is_active = true;

function calculate_total_price() {
    return 100 * 1.1;
}

function get_user_profile() {
    return { name: "John", age: 30 };
}

var config = {
    database_url: "mongodb://localhost",
    api_key: "abc123xyz",
    max_connections: 100,
    retry_attempts: 3,
    timeout_ms: 5000
};

console.log("snake_case Examples:");
console.log({ _first_name, _last_name, _email_address });
console.log("Function: calculate_total_price() =", calculate_total_price());
console.log("Config:", config);
console.log("");

// ============================================
// 4. CONSTANT_CASE (for Constants)
// ============================================
console.log("4. CONSTANT_CASE - For Constants (All uppercase with underscores):");
console.log("Format: All uppercase, words separated by underscores\n");

const MAX_USERS = 1000;
const MIN_PASSWORD_LENGTH = 8;
const API_BASE_URL = "https://api.example.com";
const DATABASE_URL = "mongodb://localhost:27017";
const TIMEOUT_MS = 5000;
const DEFAULT_LANGUAGE = "en";
const ENVIRONMENT = "production";

const COLORS = {
    RED: "#FF0000",
    GREEN: "#00FF00",
    BLUE: "#0000FF",
    BLACK: "#000000",
    WHITE: "#FFFFFF"
};

const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

console.log("CONSTANT_CASE Examples:");
console.log({ MAX_USERS, MIN_PASSWORD_LENGTH, API_BASE_URL, TIMEOUT_MS });
console.log("COLORS:", COLORS);
console.log("STATUS_CODES:", STATUS_CODES);
console.log("");

// ============================================
// 5. kebab-case (Not Valid for Identifiers, Used in HTML/CSS)
// ============================================
console.log("5. kebab-case - NOT Valid for JavaScript Variables (used in HTML/CSS):");
console.log("Format: All lowercase, words separated by hyphens\n");

// INVALID - These will cause syntax errors
// var first-name = "John";      // ERROR
// var email-address = "john@example.com";  // ERROR

console.log("❌ Invalid Examples (would cause syntax errors):");
console.log("// var first-name = 'John';");
console.log("// var email-address = 'john@example.com';");
console.log("");

// BUT used in HTML attributes and CSS class names
console.log("✓ Valid in HTML/CSS (not as JavaScript identifiers):");
console.log("<div class='user-profile'></div>");
console.log("<div data-user-id='123'></div>");
console.log(".header-component { ... }");
console.log("");

// ============================================
// 6. _privateCase (Underscore prefix for private variables)
// ============================================
console.log("6. _privateCase - Underscore Prefix Convention:");
console.log("Format: Prefix underscore to indicate private/internal variables\n");

var _privateApiKey = "secret-key-123";
var _internalCounter = 0;
var _cachedData = null;

function _internalHelper() {
    return "This is internal";
}

var BankAccount = {
    _balance: 1000,  // Should not be accessed directly
    _pin: "1234",    // Should not be accessed directly

    getBalance: function () {
        return this._balance;
    },

    withdraw: function (amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }
};

console.log("_privateCase Examples:");
console.log("Private Variables: _privateApiKey, _internalCounter, _cachedData");
console.log("Private Function: _internalHelper()");
console.log("Private Object Properties: _balance, _pin");
console.log("");

// ============================================
// 7. $dollarSignCase (Sometimes used with jQuery/special libs)
// ============================================
console.log("7. $dollarSignCase - Dollar Sign Prefix Convention:");
console.log("Format: Prefix dollar sign to indicate special/wrapped variables\n");

var $userName = "John";
var $apiResponse = { status: 200, data: {} };
var $isLoading = false;

// jQuery-style (if jQuery was used)
// var $element = document.getElementById('myId');
// var $button = jQuery('#submitBtn');

console.log("$dollarSignCase Examples:");
console.log({ $userName, $apiResponse, $isLoading });
console.log("");

// ============================================
// 8. Booleans - Special Naming Convention
// ============================================
console.log("8. Boolean Variables - Prefix with 'is', 'has', 'can', 'should':");
console.log("Format: Use verb prefixes to indicate boolean values\n");

var isActive = true;
var isVisible = false;
var isLoggedIn = true;
var hasPermission = false;
var hasError = false;
var canDelete = true;
var canEdit = false;
var shouldRender = true;
var shouldValidate = false;

console.log("Boolean Examples:");
console.log({ isActive, isVisible, isLoggedIn, hasPermission, hasError });
console.log({ canDelete, canEdit, shouldRender, shouldValidate });
console.log("");

// ============================================
// 9. Mixed Real-World Example
// ============================================
console.log("9. Mixed Real-World Example - All Cases Together:\n");

// Constants
const API_TIMEOUT = 5000;
const MAX_RETRY_ATTEMPTS = 3;

// Private variables
var _cache = {};

// Public variables
var currentUser = null;
var isAuthenticated = false;

// Constructor/Class
function UserService() {
    this._initialized = false;
    this.users = [];
}

// Private method
UserService.prototype._fetchFromCache = function (key) {
    return _cache[key];
};

// Public method (camelCase)
UserService.prototype.getUserById = function (userId) {
    return this.users.find(u => u.id === userId);
};

// Static constant
UserService.MAX_USERS = 1000;

var userService = new UserService();
console.log("Real-world example created with mixed naming conventions");
console.log("");

// ============================================
// SUMMARY - When to Use Each Case
// ============================================
console.log("========== NAMING CONVENTION GUIDE ==========");
console.log("✓ camelCase       → Variables, functions, object properties");
console.log("✓ PascalCase      → Constructors, classes, React components");
console.log("✓ snake_case      → Rarely in JS (more Python/SQL)");
console.log("✓ CONSTANT_CASE   → Constants (const/final values)");
console.log("✗ kebab-case      → NOT valid in JS (use in HTML/CSS)");
console.log("✓ _privateCase    → Private/internal variables & methods");
console.log("✓ $dollarSign     → jQuery/special library variables");
console.log("✓ is/has/can      → Boolean variables (prefix with verb)");
console.log("");
console.log("BEST PRACTICE: Use camelCase for most JavaScript identifiers!");
