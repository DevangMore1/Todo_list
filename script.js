const todos =document.querySelectorAll(".todo");
const levels =document.querySelectorAll(".level");
let draggableTodo = null;

let currentRole = 'developer';

function switchRole() {
  currentRole = document.getElementById('role').value;
}

todos.forEach((todo)=>{
    todo.addEventListener('dragstart',dragstart);
    todo.addEventListener('dragend',dragend);
});

function dragstart(){
    draggableTodo= this;
    console.log(this);
}
function dragend(){
    draggableTodo= null;
}
levels.forEach((level)=>{
    level.addEventListener("dragover",dragover);
    level.addEventListener("dragenter",dragenter);
    level.addEventListener("dragleave",dragleave);
    level.addEventListener("drop",drop);
})

function dragover(e){
    e.preventDefault();
}
function dragenter(){
    this.style.border="1px dashed #ccc"
}
function dragleave(){
    this.style.border="none" 
}
function drop(){
    this.style.border="none"
    console.log(this.id);
    if(this.id == 'inDev' && currentRole == 'developer')
    {this.appendChild(draggableTodo)}
    else if(this.id == 'inTesting' && currentRole == 'developer')
    {this.appendChild(draggableTodo)}
    if(this.id == 'done' && currentRole == 'tester')
    {this.appendChild(draggableTodo)}
}

// modal

const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// Create Todo

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener('click',createTodo);

function createTodo(){
    const todo_div = document.createElement("div");
    const todo_div1 = document.createElement("div");


    const todo_header = document.createElement("div");
    const title_value = document.getElementById("todo_title").value;
    const txt = document.createTextNode(title_value);

    todo_header.appendChild(txt);

    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);
    todo_header.classList.add("header_todo");

    const todo_des = document.createElement("div");
    const desc_value = document.getElementById("todo_desc").value;
    const txt2 = document.createTextNode(desc_value);

    todo_des.appendChild(txt2);
    todo_des.classList.add("desc");

    const todo_date = document.createElement("div");
    const date_value = document.getElementById("todo_date").value;
    const txt3 = document.createTextNode(date_value);
    todo_date.appendChild(txt3);
    todo_date.classList.add("date");

    todo_div1.appendChild(todo_header);
    todo_div1.appendChild(todo_des);
    todo_div1.appendChild(todo_date);
    todo_div1.classList.add("info");

    todo_div.appendChild(todo_div1);


    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable","true");

    

    const todo_list = document.getElementById("todo_list");
    todo_list.appendChild(todo_div);

    todo_div.addEventListener('dragstart',dragstart);
    todo_div.addEventListener('dragend',dragend);

    document.getElementById('todo_title').value="";
    document.getElementById('todo_desc').value="";
    document.getElementById('todo_date').value="";


    span.addEventListener('click',()=>{
        span.parentElement.style.display='none';
    });
    todo_form.classList.remove('active');
    overlay.classList.remove('active');
}

const close_btns=document.querySelectorAll(".close");

close_btns.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        btn.parentElement.style.display='none';
    });
});