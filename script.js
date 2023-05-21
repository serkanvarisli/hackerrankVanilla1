// Stack implementation
var stack = [];

function push() {
  var inputValue = document.getElementById("inputValue").value;

  if (inputValue === "") {
    alert("Please enter a value!");
    return;
  }

  if (stack.length >= 5) {
    alert("Stack was already full!");
    return;
  }

  stack.push(inputValue);
  document.getElementById("inputValue").value = "";

  console.log("Stack:", stack);
}

function isEmpty() {
  if (stack.length === 0) {
    alert("Yes, Stack is empty");
  } else {
    alert("No, Stack is not empty");
  }
}

function peek() {
  if (stack.length === 0) {
    alert("Operation not allowed. Stack is empty.");
    return;
  }

  var topItem = stack[stack.length - 1];
  alert("Top item: " + topItem);
}
