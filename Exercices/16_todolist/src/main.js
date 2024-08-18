let input = document.querySelector(".add input[type='text']");
let btnAdd = document.querySelector(".btn");
let divItems = document.querySelector(".items");

let tasksUser = [];

btnAdd.onclick = function () {
    let val = input.value;

    if (val === "") {
        alert("can't add a blanck task");
    } else {
        tasksUser.push({ id: tasksUser.length, task: val });
        localStorage.setItem(
            "tasks",
            tasksUser.map((ele) => JSON.stringify(ele))
        );
        renderTask(tasksUser);
        input.value = "";
    }
};

if (localStorage.getItem("tasks")) {
    let tasks = localStorage
        .getItem("tasks")
        .split("},")
        .map((ele, idx, arr) => {
            if (idx != arr.length - 1) {
                ele += "}";
            }

            return JSON.parse(ele);
        });
    tasksUser = tasks;
    renderTask(tasks);
}

function renderTask(list) {
    let tasks = list.map((task) => {
        return CompItem(task.task);
    });

    let res = tasks.reduce((pre, curr) => pre + curr);
    divItems.innerHTML = res;
}

function CompItem(txt) {
    let comp = `
    <div class="item">
        <p>${txt}</p>
        <div class="btn-item">
            <button class="del">Delete</button>
        </div>
    </div>`;

    return comp;
}

document.addEventListener("click", function (e) {
    if (e.target.className == "del") {
        let title = e.target.parentElement.previousElementSibling.textContent;
        console.log(title);
        tasksUser = tasksUser.filter((ele) =>
            ele.task === title ? false : true
        );
        if (tasksUser.length == 0) {
            divItems.innerHTML = "";
        } else {
            renderTask(tasksUser);
        }
        localStorage.setItem(
            "tasks",
            tasksUser.map((ele) => JSON.stringify(ele))
        );
    }
});
