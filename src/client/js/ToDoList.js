// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  //document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var closed = document.getElementsByClassName('close');

  for (let i = 0; i < closed.length; i++) {
    closed[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var list = document.querySelector('ul');
  list.onclick = function (ev) {
    if (ev.target.nodeName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/*
function checkItem (ev) {
  // var list = document.querySelector('ul');
  // list.addEventListener('click', function(ev) {
  if (ev.target.nodeName === 'LI') {
      ev.target.classList.toggle('checked');
  }
}
*/

export {newElement}
export {myFunction}
// export {checkItem}

// add a toggle to shrink and expand the ToDoList









// Create a new list item when clicking on the "Add" button
/*
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
}

// Create a "close" button and append it to each list item
function addCloseButton() {
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
}

// Click on a close button to hide the current list item
function removeList () {
//var close = document.getElementsByClassName("close");
//var i;
//for (i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
var div = this.parentElement;
    div.style.display = "none";
}

// Add a "checked" symbol when clicking on a list item
function checkItem (ev) {
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
};

export {newElement}
export {addCloseButton}
export {removeList}
export {checkItem}

//false);
*/
// Do a toggle expand/ shrink function