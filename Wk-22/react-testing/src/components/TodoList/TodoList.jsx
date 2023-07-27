import { useState, useEffect } from "react";

import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=11"
      );
      const todos = await res.json();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fields = Object.fromEntries(new FormData(e.target));
    fields.completed = false;
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    const todo = await res.json();
    setTodos([todo, ...todos]);
  };

  const deleteTodo = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  const completeTodo = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      }
    );
    if (res.ok) {
      setTodos(todos.map((t) => (t.id !== id ? t : { ...t, completed: true })));
    }
  };

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          onDelete={() => deleteTodo(t.id)}
          onComplete={() => completeTodo(t.id)}
        />
      ))}
    </>
  );
};

export default TodoList;
