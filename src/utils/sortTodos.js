function sortTodos(todos) {
  const sortedData = {};
  todos.map((todos) => {
    if (!sortedData[todos.status]) sortedData[todos.status] = [];
    sortedData[todos.status].push(todos);
  });
  return sortedData;
}

export { sortTodos };
