var tasks = []
var task = {
    Status:"in_process",
    Description: ""
}

function add(description){
    var new_task = Object.create(task)
    new_task.Description = description
    tasks.push(new_task)
}

function remove(ind){
    tasks.splice(ind,1)
}

function complete(task){
    task.Status = "complete"
}

function revert(task){
    task.Status = "in_process"
}

function change(task, description){
    task.Description = description
}