window.addEventListener('load', function () {
  const form = document.querySelector('#form');
  const input = document.querySelector('#input-field');
  const button = document.querySelector('#add-button');
  // const select = document.querySelector('.filter-todos');
  const ul = document.querySelector('#todo-list');
  const alertText = document.querySelector('.alert-text');
  let todos = [];

  // Form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === '') {
      alertText.textContent = 'Please enter a ToDo first!';
    } else {
      addTodo(input.value);
      input.value = '';
      alertText.textContent = 'The ToDo App helps you stay on task and on track!';
    }
  });

  function addTodo(todo) {
    // create li element, add class & set innerHTML
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = input.value;

    // create trash element & add class
    const trash = document.createElement('i');
    trash.classList.add('fas', 'fa-trash', 'text-danger');

    // append trash to li, append li to ul
    li.appendChild(trash);
    ul.appendChild(li);

    li.addEventListener('click', completeTodo);
    trash.addEventListener('click', deleteTodo);

    // save todos to local storage
    todos.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function completeTodo(e) {
    e.target.classList.toggle('completed');
  }

  function deleteTodo(e) {
    if (e) {
      if (confirm('Are you sure you want to delete this item?')) {
        e.target.parentElement.remove();
      }
    }
  }

  // Get todos from local storage
});
