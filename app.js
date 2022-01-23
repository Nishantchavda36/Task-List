//Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load All event Listners
loadEventListners();

//Load All Event Listners
function loadEventListners(){
  //Add Task Event
  form.addEventListener('submit' , addTask) ;

}

function addTask(e){
 
  //Empty input returns the alert
  if(taskInput.value === ''){
    alert("Please add tasks");
  }

  //Create List Element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create text node in list item
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a')
  //Add Class
  link.className = 'delete-item secondary-content';
  //Add delete icon
  link.innerHTML = '<i class="fa fa-remove"></i>'
  //Append link to li
  li.appendChild(link);
  //Appendlist item to collection
  taskList.appendChild(li);
  //clear input
  taskInput.value ='';

  console.log(li);
  e.preventDefault();
}