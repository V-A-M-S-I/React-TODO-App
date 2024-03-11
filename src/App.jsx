import { useState, useEffect, } from "react";
import Navbar from "./components/Navbar";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/todolist";
import  EditTodo from "./components/Edittodo"
import { v4 as uuidv4 } from "uuid";

const getLocalItems = () => {
  let items = localStorage.getItem("todos");
  return items ? JSON.parse(items) : [];
};

// Inside App.js

function App() {
  const [todos, setTodos] = useState(getLocalItems());
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null); 

  const getdata = (newtodo) => {
    const uniqueTodoId = { id: uuidv4(), name: newtodo };
    setTodos([...todos, uniqueTodoId]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEdit = (todo) => {
    setIsEditing(true);
    setSelectedTodo(todo);
  };

  // Function to handle submission of edited todo text
  const handleEditSubmit = (editedText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === selectedTodo.id ? { ...todo, name: editedText } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <Navbar />
      {!isEditing && 
      <Addtodo onSubmit={getdata} />}
      {isEditing && <EditTodo selectedTodo={selectedTodo} onSubmit={handleEditSubmit} />}
      <Todolist
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
}

export default App;
