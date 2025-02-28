const taskList = document.getElementById("taskList");
const inputField = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addBtn");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (inputField.value !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");

        span.textContent = taskText;
        li.appendChild(span);
        span.addEventListener("click", completeTask);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        li.appendChild(editBtn);
        editBtn.addEventListener("click", editTask);

        const updateBtn = document.createElement("button");
        updateBtn.classList.add("hide");
        updateBtn.textContent = "Update";
        li.appendChild(updateBtn);
        updateBtn.addEventListener("click", updateTask);

        //---------------------------------------------------
        if (taskList.firstChild) {
            taskList.insertBefore(li, taskList.firstChild);
        } else {
            taskList.appendChild(li);
        }

        inputField.value = "";
    } else {
        alert("You need to input a task !");
    }
});

function editTask(e) {
    const nextButton = this.nextElementSibling;
    const item = this.parentElement;
    const span = item.firstElementChild;

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.classList.add("edit-input");

    item.replaceChild(input, span);
    this.classList.add("hide");
    nextButton.classList.remove("hide");
}

function updateTask(e) {
    const previusButton = this.previousElementSibling;
    const item = this.parentElement;
    const input = item.parentElement.querySelector("input");

    const span = document.createElement("span");
    span.textContent = input.value;
    span.addEventListener("click", completeTask);

    input.replaceWith(span);

    this.classList.add("hide");
    previusButton.classList.remove("hide");
}

function completeTask(event) {
    const task = event.target;
    task.classList.add("completed");

    function deleteTask() {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }

    setTimeout(deleteTask, 1500);
}

// newbtn.addEventListener("click", function () {
//         const span = document.createElement("span");
//         span.classList.add("mySpan");
//         span.innerHTML = input.value;
//         input.replaceWith(span);
//         input.classList.add("hide");
