import { addTaskToArray, displayHtml, /* updateTasks */ } from "./domUpdate.js";
import { handleEvent } from "./keyboardfunction.js";
import { deleteTasks, updateTasks } from "./crud.js"

//from domUpdate.js file
addTaskToArray();
displayHtml();

//from keyboardfunction.js file
handleEvent();

//from crud.js file
deleteTasks();
updateTasks();



















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









