// Todolist.jsx
import PropTypes from "prop-types";

export default function Todolist({ todos, onDelete, onEdit}) {
  return (
    <div className="mx-auto w-96">
      <h2 className="text-center font-bold">Your Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li className="flex justify-between items-center p-3 mb-4 rounded-2xl bg-black text-emerald-300" key={todo.id}>
            <span>{todo.name}</span>
            <div>
              <span className="mr-2 cursor-pointer" onClick={() =>onEdit (todo)}>👈</span>
              <span className="cursor-pointer" onClick={() => onDelete(todo.id)}>✖️</span>
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
  onEdit: PropTypes.func.isRequired
};
