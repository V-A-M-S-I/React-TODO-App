import { useState } from "react";
import PropTypes from "prop-types"; 




function EditTodo({ selectedTodo, onSubmit }) { 
    const [currentText, setCurrentText] = useState(selectedTodo.name); // Set initial value

    const handleInputChange = (event) => {
        setCurrentText(event.target.value);
    };

    const updateSubmit = (event) => {
        event.preventDefault();
        onSubmit(currentText); 
        setCurrentText(""); 
    }

    return (
        <>
            <div className="mx-auto w-96 my-5">
                <form onSubmit={updateSubmit} className="flex justify-center gap-3">
                    <input
                        className="p-3 rounded-lg w-80 text-xl text-violet-500 border-4 font-semibold"
                        type="text"
                        placeholder="Enter your todo"
                        value={currentText}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="bg-black text-emerald-300 rounded-lg p-3">Save</button>
                </form>
            </div>
        </>
    );
}

EditTodo.propTypes = {
    selectedTodo: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default EditTodo;



