/*document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var taskInput = document.getElementById('new-task-input');
    var taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      var taskList = document.getElementById('task-list');
  
      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      checkbox.style.transform = 'scale(1.5)';
      checkbox.style.margin = '10px';

      var label = document.createElement('label');
      label.innerText = taskText;
  
      li.appendChild(checkbox);
      li.appendChild(label);
      taskList.appendChild(li);
      
  
      taskInput.value = ''; 
    }
  });

  document.getElementById('finish-type').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    var taskList = document.getElementById('task-list');
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  });

  function deleteTask(button) {
    var listItem = button.parentNode;
    var todoList = listItem.parentNode;
    todoList.removeChild(listItem);
  }

  button-type.addEventListener('submit', function() {

    const button-type = document.getElementById("button-type");
    const delete-icon-btn = document.getElementById("delete-icon-btn");
    delete-icon-btn.style.display = "block";
  });
const new-task-input = document.getElementById("showButton");
const delete-icon-btn = document.getElementById("hiddenButton");


document.getElementById('add-task-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var taskInput = document.getElementById('new-task-input');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var taskList = document.getElementById('task-list');

    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.style.transform = 'scale(1.5)';
    checkbox.style.margin = '10px';

    var label = document.createElement('label');
    label.innerText = taskText;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);


    taskInput.value = ''; 
  }
});

document.getElementById('finish-type').addEventListener('click', function(event) {
  event.preventDefault(); 

  var taskList = document.getElementById('task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

function deleteTask(button) {
  var listItem = button.parentNode;
  var todoList = listItem.parentNode;
  todoList.removeChild(listItem);
}

document.getElementById('button-type').addEventListener('click', function() {
  var buttonType = document.getElementById("button-type");
  var deleteIconButton = document.getElementById("delete-icon-btn");
  deleteIconButton.style.display = "block";
});

var newTaskInput = document.getElementById("showButton");
var deleteIconButton = document.getElementById("hiddenButton");*/


document.getElementById('add-task-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var taskInput = document.getElementById('new-task-input');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var taskList = document.getElementById('task-list');

    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.style.transform = 'scale(1.5)';
    checkbox.style.margin = '10px';

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome delete icon
    deleteButton.classList.add('delete-button'); // Add a class for custom styles

    deleteButton.addEventListener('click', function() {
      deleteTask(this); // Pass the button element to the deleteTask function
    });

    var label = document.createElement('label');
    label.innerText = taskText;

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton); // Add the delete button to the list item
    taskList.appendChild(li);

    taskInput.value = ''; 
  }
});

document.getElementById('finish-type').addEventListener('click', function(event) {
  event.preventDefault(); 

  var taskList = document.getElementById('task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

function deleteTask(button) {
  var listItem = button.parentNode;
  var todoList = listItem.parentNode;
  todoList.removeChild(listItem);
}

document.getElementById('button-type').addEventListener('click', function() {
  var buttonType = document.getElementById("button-type");
  var deleteIconButton = document.getElementById("delete-icon-btn");
  deleteIconButton.style.display = "block";
});

var newTaskInput = document.getElementById("showButton");
var deleteIconButton = document.getElementById("hiddenButton");


