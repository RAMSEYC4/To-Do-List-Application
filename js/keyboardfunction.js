import { jsInputValues, addTaskToArray } from "./domUpdate.js"

/* enter function  */
jsInputValues.addEventListener('keydown', inputEnter);

/* 
  inputEnter should only ever be used as an 
  event listener (because it needs event).
  handleEnter is the reusable function you 
  can call anywhere without worrying about event.
  handleEnter is teh function that the task to the 
  Dom
 */
export function inputEnter(event) {
  if (event.key === "Enter") {
    handleEvent();
  }
}

export function handleEvent() {
  addTaskToArray()
}