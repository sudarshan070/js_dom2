// Select input element class , id & tag
// add book, we click on btn
var searchBooks = document.querySelector(".search-books");
var addBooks = document.querySelector(".add-book");
var checkbox = document.querySelector("#hide");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
var arr = JSON.parse(localStorage.getItem("book")) || [];

function addBook(event) {
  // obj book name and id
  event.preventDefault();
  if (addBooks.value === "") {
    alert("Enter book name");
  }
  var todo = {
    bookName: addBooks.value,
    id: Date.now()
  };

  //   console.log(todo);
  arr.push(todo);
  localStorage.setItem("book", JSON.stringify(arr));
  viewCall(arr);
  // console.log(arr);
}

function viewCall(arr) {
  ul.innerHTML = "";
  arr.forEach(todo => {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var div = document.createElement("div");
    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete");
    p.innerHTML = todo.bookName;
    deletebtn.innerHTML = "Delete";
    deletebtn.addEventListener("click", deleteBook);
    li.setAttribute("data-id", todo.id);
    deletebtn.setAttribute("data-id", todo.id);
    div.append(deletebtn);
    li.append(p, div);
    ul.append(li);
  });
  addBooks.value = "";
}

// for delete book create a button
function deleteBook(event) {
  console.log(event.target.dataset.id);
  arr = arr.filter(todo => !(event.target.dataset.id == todo.id));
  console.log(arr);

  localStorage.setItem("book", JSON.stringify(arr));
  viewCall(arr);
}

// Hide all books, we want to hide all books. books store in ul list
function hideBooks(event) {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
  localStorage.setItem("book", JSON.stringify(arr));
  viewCall(arr);
}

// in search function first filter arr & check include word
function searchBook(event) {
  event.preventDefault();
  var searchArr = arr.filter(todo =>
    todo.bookName.toLowerCase().includes(event.target.value)
  );

  viewCall(searchArr);
  localStorage.setItem("book", JSON.stringify(arr));
}

checkbox.addEventListener("click", hideBooks);
btn.addEventListener("click", addBook);
searchBooks.addEventListener("keyup", searchBook);
