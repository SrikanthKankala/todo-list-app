
// C:\Users\kanka\All-Frontend\todo-list-app\src\components\TodoList.tsx


import React, { useState } from 'react';
import TodoRow from './TodoRow.tsx';
import '../styles/todoList.css'; // Adjust import path for todoList.css

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ label: string; isChecked: boolean }[]>([]);
  const [newTodoLabel, setNewTodoLabel] = useState<string>('');

  const handleToggle = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoLabel.trim() !== '') {
      const newTodo = { label: newTodoLabel, isChecked: false };
      setTodos([...todos, newTodo]);
      setNewTodoLabel(''); // Clear input field after adding todo
    }
  };

  return (
    <div className="todo-list-container">
      <h2>Todo</h2>
      {todos.map((todo, index) => (
        <TodoRow
          key={index}
          label={todo.label}
          isChecked={todo.isChecked}
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
      <br></br><br></br>
      <form onSubmit={handleAddTodo} className="todo-list-form">
        <input
          type="text"
          value={newTodoLabel}
          onChange={(e) => setNewTodoLabel(e.target.value)}
          placeholder="Add task here..."
        />
        <button type="submit">Add</button>
      </form>
    
    </div>
  );
};

export default TodoList;
