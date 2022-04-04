// Selectors
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const ul = document.querySelector('.list-group');
const select = document.querySelector('.select');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
button.addEventListener('click', addTodo);
ul.addEventListener('click', removeTodo);
ul.addEventListener('click', completeTodo);
select.addEventListener('change', filterTodos);

// Add a todo
function addTodo(e) {
  e.preventDefault();

  if (input.value === '') {
    launchModal();
  } else {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo', 'd-flex', 'justify-content-between', 'align-items-center', 'gap-2');

    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item', 'flex-grow-1');
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);
    saveLocalTodos(input.value);

    const checkBtn = document.createElement('button');
    // checkBtn.classList.add('btn', 'complete-btn', 'btn-styles', 'btn-sm', 'mr-2');
    checkBtn.classList.add('complete-btn', 'btn', 'btn-styles', 'btn-sm');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('trash-btn', 'btn', 'btn-styles', 'btn-sm');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    ul.appendChild(todoDiv);

    input.value = '';
  }
}

//Remove a todo
function removeTodo(e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall-off');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
}

//Complete a todo
function completeTodo(e) {
  const item = e.target;
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//Filter todos
function filterTodos(e) {
  const todos = ul.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        todo.classList.remove('d-none');
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
          todo.classList.remove('d-none');
        } else {
          todo.classList.add('d-none');
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
          todo.classList.remove('d-none');
        } else {
          todo.classList.add('d-none');
        }
        break;
    }
  });
}

//Save todos in local storage
function saveLocalTodos(todo) {
  //Check to see if item exist
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

//Get todos from local storage
function getTodos() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo', 'd-flex', 'justify-content-between', 'align-items-center', 'gap-2');

    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item', 'flex-grow-1');
    todoItem.innerText = todo;
    todoDiv.appendChild(todoItem);

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('complete-btn', 'btn', 'btn-dark', 'btn-sm', 'border', 'border-light', 'rounded-circle', 'mr-2');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('trash-btn', 'btn', 'btn-dark', 'btn-sm', 'border', 'border-light', 'rounded-circle', 'mr-2');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    ul.appendChild(todoDiv);
  });
}

//Remove todos from local storage
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function launchModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('d-block', 'show');
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('d-block', 'show');
  });
}
