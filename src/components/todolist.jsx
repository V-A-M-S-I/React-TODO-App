import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import img from "/src/assets/vam.png";

export default function Todolist({ todos, onDelete, onEdit }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleCheckboxChange = (todo) => {
    if (completedTodos.includes(todo.id)) {
      setCompletedTodos(completedTodos.filter((id) => id !== todo.id));
    } else {
      setCompletedTodos([...completedTodos, todo.id]);
      alert("Your TODO will get auto REMOVED from the list after 90 min")
      
    }
  };

  useEffect(() => {
    const timerIds = [];
    completedTodos.forEach((todoId) => {
      const timerId = setTimeout(() => {
        onDelete(todoId);
        setCompletedTodos((prevCompletedTodos) =>
          prevCompletedTodos.filter((id) => id !== todoId)
        );
      }, 90 * 60 * 1000); 
      timerIds.push(timerId);
    });
    return () => {
      timerIds.forEach((id) => clearTimeout(id));
    };
  }, [completedTodos, onDelete]);

  return (
    <div className="mx-auto w-96">
      <h2 className="text-center font-bold my-5">Your Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center p-3 mb-4 rounded-2xl bg-black text-emerald-300"
            key={todo.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-4 rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
                onChange={() => handleCheckboxChange(todo)}
              />
              <span className={`ml-2 ${completedTodos.includes(todo.id) ? "line-through text-white" : ""}`}>{todo.name}</span>
            </div>
            <div className="flex">
              <span className="mr-2 cursor-pointer" onClick={() => onEdit(todo)}>
                <img src={img} alt="todo" className="max-w-5 max-h-full" />
              </span>
              <span className="cursor-pointer" onClick={() => onDelete(todo.id)}>
                ✖️
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Todolist.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
