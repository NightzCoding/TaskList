"use strict";

$(document).ready( () => {
    $('#add_task').click(() => { 
        const textbox = $("#task");
        const task = textbox.val();

        
    if (task === '') {
        // if task is an empty string
        alert('Please enter a task.');
        textbox.focus(); // set the focus on the textbox
      } else {
        // else, add the task to localStorage
        let tasks = localStorage.myTasks || ''; // "" is default
        localStorage.myTasks = tasks.concat(task, '\n');
      };
      textbox.val("");
      $("#task_list").val(localStorage.myTasks);
      textbox.focus();
    });
    $('#clear_tasks').click(() => {
        // remove the myTasks item from localStorage
        localStorage.removeItem('myTasks');
        // clear the task list
        $('#task_list').val('');
        // set the focus back to the task textbox
        $('#task').focus();
    });
      // select the task list and set its value to localStorage.myTasks
  const taskList = $('#task_list');
  taskList.val(localStorage.myTasks || '');

  // move the focus to the task text box
  const taskTextbox = $('#task');
  taskTextbox.focus();
});