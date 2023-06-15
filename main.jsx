let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0; //
  count = 0;
  //   console.log(count);
}

// let username = "Aprime";
// let message = "You have three new notifications";
// let messageToUser = username + ", " + message + "!";
// console.log(messageToUser);

// let myName = "Charles Mwangi";
// let greeting = "Hello, there: ";

// let myGreeting = greeting + myName;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");
// let myName = "Charles Mwangi";
// let greeting = "Welcome back: ";

// welcomeEl.innerText = greeting + myName;

// welcomeEl.innerText += " 👋";

// How do I add more emojis
// 1. Find the emoji you want on https://getemoji.com/
// 2. Use the colon symbol to "name" your emoji
// 3. Write the variable name between two colons :emoji_name:
