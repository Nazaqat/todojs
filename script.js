// Backgournd music Code
var musix = document.getElementById("songAudio");
function enableControls() {
  musix.controls = true;
  musix.load();
}

function disableControls() {
  musix.controls = false;
  musix.load();
}

document.write(Date());

// Create a new list item when clicking on the "Add" button

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Input field is required!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  // Keeping the input field ready for next activity
  document.getElementById("myInput").value = "";

  // Creating & appending cross button on NEWLY CREATED li's
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Create a "close" button and append it to list items displayed ON LOAD
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide list item on page
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add line through when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//Accessing Ul and its children & looping through li's
function downloadData() {
  var x = "";
  var data = document.getElementById("myUL");
  var allnodes = data.children;
  for (var i = 0; i < allnodes.length; i++) {
    x += " " + allnodes[i].innerText;
  }
  // Download list items
  var dataToDownload = new Blob([x]);
  var url = window.URL.createObjectURL(dataToDownload);
  document.getElementById("download_link").href = url;
}
