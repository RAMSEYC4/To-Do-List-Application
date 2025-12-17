import { task, displayHtml } from "./domUpdate.js"
window.updateTasks = updateTasks;

//refactor this globla variable later 
window.deleteTasks = deleteTasks;
// window.updateTasks = updateTasks;

/* delete logic */
export function deleteTasks(index) {
  /*   
    continue from here !
    this code is making the id item-0 always 0
    it must delete elements from the array 
    displayHtml() Re-read the modified task array
  */
  task.splice(index, 1);
  displayHtml();
  // console.log(task);
  // console.log(`Task ${index} was removed`);
}


/* update logic */
//to be able to update the task click update botton 
//access the dom text , edit it 
/* testing the function update function */
export function updateTasks(index) {
  if (typeof index !== "number") {
    //make sure all index are numbers 
    //if not convert them to a number;
    index = Number(index);
  }
  const itemContainer = document.querySelector(`#item-${index}`);
  if (!itemContainer) return;
  const contentP = itemContainer.querySelector('.generated-js-p');
  if (!contentP) return;
  // Simple example: replace the displayed text and update the array
  // (Replace "Updated text!" with whatever new value you obtain)
  // const newValue = "Updated text!"
  task[index] = contentP.value;
  displayHtml();
}