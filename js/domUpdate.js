export const task = [];
export let jsInputValues = document.querySelector('.task-input');
let jsAddButton = document.querySelector('.jsAddButton');
let jsDisplay = document.querySelector('.generated-js-parent');


//add the tasks then clear the input
export const addTaskToArray = () => {
  let inputTasks = jsInputValues.value.trim();
  if (inputTasks) {
    task.push(inputTasks);
    jsInputValues.value = "";
    displayHtml();
  }
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

/* refactor this later */
let finalPosition = null
export const displayHtml = () => {
  let html = "";
  /* refactor later */
  let position = 0;
  finalPosition = position;
  task.forEach((vales, index) => {
    position = index;
    //display the html on the page
    //refactor this code later 
    html += `<div class="task-container" id="item-${index}">
    <textarea class="generated-js-p">${vales}</textarea>
      <div class="task-action">
        <button class="jsUpdatebutton"
          onclick="updateTasks(${index})">
          Update task
        </button>
        <button class="jsDeletebutton"
          onclick="deleteTasks(${index})">
          Delete task
        </button>
      </div>
    </div>
    `;
  })
  jsDisplay.innerHTML = html;
}

// console.log(finalPosition);
// window.updateTasks = updateTasks;






