const input = document.getElementById("input-box");
const addBtn = document.getElementById("btn");
const taskList = document.getElementById("tasklist");

function addTask() {

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">

        <span>${taskText}</span>

        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    taskList.appendChild(li);

    input.value = "";

    input.focus();

    const checkbox = li.querySelector("input");

    checkbox.addEventListener("change", function () {

        li.classList.toggle("completed");

    });

   const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        li.remove();

    });

}

addBtn.addEventListener("click", addTask);




input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});