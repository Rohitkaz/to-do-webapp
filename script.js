const task=document.getElementById("todoinput");
const todolist=document.getElementById("todos");

// add the todoitem
const createCard=(todo, index)=>{
  return `
  <div class="todoitem" >
  <div class="cardtext">
  ${todo.data}
  </div>
  <div class="cardbuttons">
  <button id="${index}" class="todocheck" onclick="taskcompleted(this.id)" ><ion-icon name="checkmark-done-circle-outline" class="iconcheck${
    todo.completed === true ? " completed" : ""
}" ></ion-icon></button>
  <button id="${index}" class="tododelete" onclick="taskdeleted(this.id)"><ion-icon name="close-circle-outline" class="icondelete"></ion-icon></button>
  <div>
  </div>
`

}

function addtask(){
  addItemtoLocal(task.value);
  document.getElementById("todoinput").value="";

renderList()
}
function addItemtoLocal(todo)
{
  if(localStorage.getItem("todolist"))
  {
    let todos=JSON.parse(localStorage.getItem("todolist"));
    todos.push({"completed":false,"data":todo});
    localStorage.setItem("todolist",JSON.stringify(todos));
  }
  else
  {
    let arr=[]
    arr.push({"completed":false,"data":todo});
    localStorage.setItem("todolist",JSON.stringify(arr));
  }
}

const renderList = ()=>{
  let todos=JSON.parse(localStorage.getItem("todolist"));
  // console.log(todos)
  todolist.innerHTML=""
  todos.forEach((todo, ind) => {
    // console.log()
    todolist.innerHTML+=createCard(todo, ind)
  });
}
const taskcompleted=(id)=>{
  console.log(id)
  
  //const id=e.target.id;
  let todos=JSON.parse(localStorage.getItem("todolist"));
  console.log(todos);
  todos[id].completed=true;
  localStorage.setItem("todolist",JSON.stringify(todos));
  renderList()
}
const taskdeleted=(id)=>{
  
  //const id=e.target.id;
  let todos=JSON.parse(localStorage.getItem("todolist"));
  console.log(todos);
  todos.splice(id, 1);
  localStorage.setItem("todolist",JSON.stringify(todos));
  renderList()
}

// localStorage
// todolist: [{compleled:false, data:"fasdfj"}]

// const check=document.getElementsByClassName("todocheck")
// const buttons=document.getElementsByClassName("cardbuttons");


renderList()
