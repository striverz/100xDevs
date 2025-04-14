import React, { useState } from "react";
import useTodoStore from "./todoStore";

const Todo = () => {
  const { addTodo, deleteTodo, filterEvenTodos, totalTodos } = useTodoStore();
  const todoData = useTodoStore((state) => state.todos);
  const todoLength = useTodoStore((store) => store.count);

  const [todoTask, setTodoTask] = useState("");
  const [id, setId] = useState("");

  return (
    <div>
      <div>
        <input
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        ></input>
        <button
          onClick={() => {
            addTodo(todoTask);
            setTodoTask("");
          }}
        >
          Add Todo
        </button>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <button onClick={() => deleteTodo(id)}>Delete Todo</button>
      </div>
      <div>
        <button onClick={filterEvenTodos}>Even Todos</button>
        <button onClick={totalTodos}>Total Todos</button>
        {todoLength && <h1>{todoLength}</h1>}
      </div>

      {/* Displaying the todoDetails */}

      <div>
        {todoData &&
          todoData.map((todo) => (
            <div key={todo?.id}>
              <h1>
                {todo.id}
                {todo?.task}
              </h1>
              <span>{todo.status}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
