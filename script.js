let addToDoButton = document.getElementById('addToDo');
let toDoContainer =  document.getElementById('toDoContainer');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener("click", function(){
   var paragraph = document.createElement('p');
   paragraph.classList.add("paragraph-stylin");
   paragraph.innerText = inputfield.value;
   toDoContainer.appendChild(paragraph);
   inputField.value = "";
   paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
   })
   paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
   })
})