const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

/* let savedList = JSON.parse(localStorage.getItem("todos"));
taskList.innerHTML = savedList; */

addTask.addEventListener("click", function(){
   const element = document.createElement("div");
   element.classList.add("listStyling");
   element.innerText = taskInput.value;

   const comButton = document.createElement("button");
   comButton.innerText = "Completed";
   comButton.style = "margin-left: 10px; color: white; background-color: green";
   element.appendChild(comButton);

   const delButton = document.createElement("button");
   delButton.innerText = "Delete";
   delButton.style = "margin-left: 10px; color: white; background-color: red";
   element.appendChild(delButton);

   taskList.appendChild(element);

   taskInput.value = "";

   comButton.addEventListener("click", function() {
      element.style.textDecoration = "line-through";
   })

   delButton.addEventListener("click", function() {
      taskList.removeChild(element);
   
/*    localStorage.setItem("todos", JSON.stringify(taskList)); */

   })
})