var tasks = []

var taskTemplate = {
    Status: "in_process",
    Description: ""
};

function addTask() {
    var input = document.getElementById('task-input');
    var description = input.value.trim();
    
    if (description) {
        var newTask = Object.create(taskTemplate);
        newTask.Description = description;
        tasks.push(newTask);
        input.value = "";
        displayTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function completeTask(index) {
    tasks[index].Status = "complete";
    displayTasks();
}

function revertTask(index) {
    tasks[index].Status = "in_process";
    displayTasks();
}

function displayTasks() {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            ${task.Description} - <strong>${task.Status}</strong>
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="revertTask(${index})">Revert</button>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(listItem);
    });
}
