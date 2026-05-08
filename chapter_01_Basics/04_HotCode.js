// Add function
function add(a, b) {
  return a + b;
}

// Using add function in a 100000 times for loop
let result = 0;
for (let i = 0; i < 100000; i++) {
  result = add(result, i);
}

console.log(`Final result after 100000 iterations: ${result}`);
