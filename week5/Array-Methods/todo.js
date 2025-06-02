fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
  .then(response => response.json())
  .then(todos => {
    const user3Todos = todos.filter(todo => todo.userId === 3);
    const incompleteCount = user3Todos.filter(todo => !todo.completed).length;


    const todoSection = document.getElementById('user3-todos');
    todoSection.innerHTML = '<h3>User 3\'s Todos</h3>';
    user3Todos.forEach(todo => {
      const p = document.createElement('p');
      p.textContent = todo.title + (todo.completed ? ' ✅' : ' ❌');
      todoSection.appendChild(p);
    });


    const countSection = document.getElementById('incomplete-count');
    countSection.innerHTML = `<strong>Number of Incomplete Tasks:</strong> ${incompleteCount}`;
  });
