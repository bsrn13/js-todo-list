let taskDOM = document.querySelector("#task");

const toastSuccess = document.querySelector(".success");
const toastError = document.querySelector(".error");

// checking the tasks
let list = document.querySelector("ul");
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function checked() {
  this.classList.toggle("checked");
}

// new task on the list & toast
function newElement(event) {
  if (taskDOM.value.trim() !== "") {
    addItem(taskDOM.value);
    $(".success").toast("show");
    // console.log(taskDOM.value.trim())
    taskDOM.value = "";
  } else {
    $(".error").toast("show");
  }
}

// close buttons
let closeButtons = document.getElementsByClassName("close");
let i;

let userListDOM = document.querySelector("#list");

// adding & removing new element
const addItem = (task) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${task}
    <span class="close">x</span>
    `;
  userListDOM.append(liDOM);
  for (i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }
  let listElements = document.querySelectorAll("li");
  console.log((k = listElements));
  for (let i = 0; i < listElements.length; i++) {
    //local storage
    localStorage.setItem(`todo-task-${i + 1}`, listElements[i].innerHTML);
    let localGetItem = listElements[i].innerHTML.split("<", 0);
    console.log(localGetItem);
    //userListDOM.append(localStorage.getItem(`todo-task${i}`.value))
  }
};
