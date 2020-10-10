// Create a new list item when clicking on the "Add" button
// Constants for setting the elements ids
const todoEntryID = "todo-entry";
const todoTextID = "todo-text";
const todoEntryDeleteElementID = "delete-todo-entry";
function newElement() {
  // Fetching the input value
  const inputValue = document.getElementById("myInput").value;
  // If input value is empty then alerting and exiting
  if (inputValue === '') {
    alert("You must write something!");
    return "";
  }
  // The list element for todo
  var todoEntry = document.createElement("li");
  todoEntry.id = todoEntryID;
  // The text element within the todo list element
  var spanElementForText = document.createElement("span");
  spanElementForText.id = todoTextID;
  var textElement = document.createTextNode(inputValue);
  spanElementForText.appendChild(textElement);
  // The Close button within the todo list
  var spanElementForClose = document.createElement("span");
  spanElementForClose.id = todoEntryDeleteElementID;
  var closeSymbol = document.createTextNode("\u00D7");
  spanElementForClose.appendChild(closeSymbol);
  // Inserting both the text and close button inside the todo list element
  todoEntry.appendChild(spanElementForText);
  todoEntry.appendChild(spanElementForClose);
// Inserting the todo list element inside the todo list
  document.getElementById("myUL").appendChild(todoEntry);
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Exporting constants also, to use them in index.js
export {
  newElement,
  myFunction,
  todoEntryDeleteElementID,
  todoTextID
}