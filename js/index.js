console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const li = document.createElement("li");
  li.textContent = "This is a new toast message!";
  toastContainer.append(li);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
