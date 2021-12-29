
# A Simple-Todo App 

## Project objective
Build a simple ToDo App that allows users to create and save todo items, mark them as complete, filter by status, and remove them from the list.

## Utilities, languages and frameworks
HTML, CSS, JavaScript and Bootstrap 5. 

## Notes
**HTML**  
Create a container that includes the header (h1, text, etc.), a form (input, button, select), and a div  

**CSS**  
Other than some odd Bootstrap styling, and personal preferences, the CSS is mainly used to create a couple of classes for JavaScript, (.completed and .fall-off). I also removed the pointer-events on the check and trash icons to make it easier to click the buttons housing them.  

**JavaScript**  
Get the selectors - The input, button, ul and select elements.  

Set up event listeners - On the document, button, ul and select.  

Create functions
1. addTodo() - Creates the complete todo item (div, li, check and delete button), appends it to the ul. Also includes a function that saves the todos in local storage (saveLocalTodos()).  

2. removeTodo() - Removes a todo from the list (ul) and local storage.

3. removeLocalTodos() - Called inside removeTodo() to remove the todo from local storage.

4. completeTodo() - Toggle the class of “completed” on any todo clicked.

5. filterTodos() - Loops over the todos, then filters and displays them based on value and classList.

6. saveLocalTodos() - Creates an array, pushes in the new todos, JSON.stringify the data to be saved in local storage.

7. getTodos() - Checks local storage for todos, then creates the todo item (similar to addTodo()) and displays them after the document loads.

## In the wild
