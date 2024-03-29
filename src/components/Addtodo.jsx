import { useState } from "react";
import PropTypes from "prop-types"; 
export default function Addtodo(props) {
    const [todoText, setTodoText] = useState("");
 

    const handleInputChange = (event) => {
        setTodoText(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (todoText.trim() === "") return;
        props.onSubmit(todoText)
        setTodoText(""); 
    }

    return (
        <>
            <div className="mx-auto w-96 my-5">
                <form onSubmit={handleSubmit} className="flex justify-center gap-3 ">
                    <input
                        className="p-3 rounded-lg w-80 text-xl text-violet-500 border-4 font-semibold"
                        type="text"
                        placeholder="enter your todo"
                        value={todoText} // Set the input value to the state
                        onChange={handleInputChange} // Attach onChange event handler
                    />
                    <button type="submit" className="bg-black text-emerald-300 rounded-lg p-3">Add</button>
                </form>

                
            </div>
        </>
    );
}

Addtodo.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};