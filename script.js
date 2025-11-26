const task = [];
let jsInputValues = document.querySelector('.task-input');
let jsAddButton = document.querySelector('.jsAddButton');
let jsDisplay = document.querySelector('.generated-js-parent')

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
  displayHtml()
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
    html = `<div class="task-container">
      <p class="generated-js">${vales}</p>
      <button class="jsDeletebutton" onclick="deleteOption(task)">Delete task</button>
    </div>
    `;
  })
  jsDisplay.innerHTML += html;
  // console.log(jsDisplay.innerHTML)
}

