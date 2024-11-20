'use client';
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6">
      {/* Todo List Heading */}
      <h1 className="text-3xl font-extrabold text-yellow-400 mb-4">Todo List</h1>

      {/* Todo Input Form - Directly under the heading */}
      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        {/* Adjusted input size with significantly more padding */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-8 py-4 text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition duration-300"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet! Add some tasks to get started.</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-container bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={`todo-text ${todo.completed ? 'completed' : ''}`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn px-3 py-1 text-red-500 hover:text-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Todo Footer */}
      {todos.length > 0 && (
        <div className="todo-footer mt-6 text-sm text-gray-500 flex justify-between items-center">
          <span>Total todos: {todos.length}</span>
          <span>
            Completed: {todos.filter((todo) => todo.completed).length}
          </span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
