const task = [];
let jsInputValues = document.querySelector('.task-input');
let jsAddButton = document.querySelector('.jsAddButton');
let jsDisplay = document.querySelector('.generated-js-parent');

/* jsAddButton.addEventListener('click', addTaskToArray)
function addTaskToArray() {
  let inputTasks = jsInputValues.value;
  task.push(inputTasks)
  jsInputValues.value = "";
  displayHtml()
} */

//add the tasks then clear the input
const addTaskToArray = () => {
  let inputTasks = jsInputValues.value;
  task.push(inputTasks)
  jsInputValues.value = "";
  displayHtml();
}
jsAddButton.addEventListener('click', addTaskToArray)

/* function displayHtml() {
  let html = ""
  //--find out what happens when i call that
  //--function here too what happens
  // addTaskToArray()
  task.forEach((vales) => {
    html = `<p>${vales}</p>`;
  })
  console.log(html);
  jsDisplay.innerHTML += html;
} */

//display the html on the page
const displayHtml = () => {
  let html = ""
  task.forEach((vales, index) => {
    html += `<div class="task-container" id="item-${index}">
      <p class="generated-js">${vales}</p>
      <button class="jsDeletebutton"
        onclick="deleteTasks(${index})">
        Delete task
      </button>
    </div>
    `;
  })
  jsDisplay.innerHTML = html;
}

/* 
  used a faction declaration because i want 
  the default option of functions passing the 
  index as arguments from displayhtml function
  inside he foreach loop.
*/

/*
add a function that waits foe the button or enter 
to be clicked before running the function  
*/

function deleteTasks(index) {
  /*   
    continue from here !
    this code is making the id item-0 always 0
    it must delete elements from the array 
  */
  task.splice(index, 1);
  const elementToRemove = document.querySelector(`#item-${index}`);
  if (elementToRemove) {
    elementToRemove.remove();
    console.log(`Task ${index} was removed`);
  }
  displayHtml();
}




