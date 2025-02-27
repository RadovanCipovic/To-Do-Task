const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let isEditing = false;

// add and display task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");

        //span - item text
        const span = document.createElement("span");
        span.classList.add("mySpan");
        span.textContent = taskText;

        //edit button
        const editButton = document.createElement("button");
        editButton.classList.add("editButton");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editing);

        //appends
        li.appendChild(span); // adding span el
        li.appendChild(editButton); // add edit button
        span.addEventListener("click", completeTask); // deleting (finished task)

        if (taskList.firstChild) {
            taskList.insertBefore(li, taskList.firstChild);
        } else {
            taskList.appendChild(li);
        }

        // clear input
        taskInput.value = "";
    }
}

// Completed task - delete task
function completeTask(event) {
    const task = event.target;
    task.classList.toggle("completed");

    function deleteTask() {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }

    setTimeout(deleteTask, 1500);
}
// Edit task button - maybe :)
function editing() {
    isEditing = true;

    if (isEditing) {
        const liElement = this.parentElement;

        const spanEl = liElement.querySelector("span");
        const newbtn = document.createElement("button");
        const input = document.createElement("input");
        const editBtn = document.createElement("button");

        editBtn.classList.add("editButton");

        //update btn
        newbtn.classList.add("update");
        newbtn.textContent = "Update";
        this.replaceWith(newbtn);

        //input
        input.classList.add("inputText");
        spanEl.replaceWith(input);
        input.value = spanEl.textContent;

        //update span with inputed text
        newbtn.addEventListener("click", function () {
            const editBtn = document.createElement("button");
            editBtn.classList.add("editButton");
            editBtn.textContent = "Edit";
            newbtn.replaceWith(editBtn);

            const span = document.createElement("span");
            span.classList.add("mySpan");
            span.textContent = input.value;
            input.replaceWith(span);
        });
        isEditing = false;
    } else {
        return;
    }
}
