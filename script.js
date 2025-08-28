// ======================
// Part 1: Variables & Conditionals
// ======================
let userName = "Franklin";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult ✅`);
} else {
  console.log(`${userName} is a minor ❌`);
}

// ======================
// Part 2: Functions
// ======================

// Function 1: Greet user
function greetUser(name) {
  console.log(`Hello, ${name}! 👋`);
}

// Function 2: Square a number
function squareNumber(num) {
  return num * num;
}

greetUser(userName);
console.log("Square of 5 is:", squareNumber(5));

// ======================
// Part 3: Loops
// ======================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log(`For loop count: ${i}`);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log(`While loop iteration: ${count}`);
  count++;
}

// ======================
// Part 4: DOM Interactions
// ======================

// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("title").innerText = "Text Changed! 🚀";
});

// 2. Change background color
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "#d1f7c4";
});

// 3. Generate a list dynamically
document.getElementById("listBtn").addEventListener("click", function() {
  let itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // clear list first
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = `Item ${i}`;
    itemList.appendChild(li);
  }
});
