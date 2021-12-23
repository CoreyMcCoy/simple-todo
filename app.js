//* Selectors
const inputField = document.querySelector('#add-todo');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');
const todoItem = document.querySelector('li');
const select = document.querySelector('.filter-todo');

addButton.addEventListener('click', (e) => {
  e.stopPropagation();
  const newLi = document.createElement('li');
  newLi.classList.add('list-group-item');
  newLi.innerHTML = inputField.value;
  todoList.appendChild(newLi);
  newLi.addEventListener('click', completeItem);
  todoList.addEventListener('dblclick', deleteItem);

  inputField.value = '';
});

function completeItem(e) {
  e.stopPropagation();
  e.target.classList.toggle('completed');
}

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

//* Local Storage
