import { ToDoItem } from "../ToDoItem/ToDoItem.jsx";
import { useState } from "react";

export function TodoList() {
    const [arrTodo, setArrTodo] = useState([
        "To do homework",
        "Clean the house",
        "Go shopping",
        "Read a book"
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();

        if (inputValue.trim() == "") {
            return;
        }

        if (arrTodo.includes(inputValue.trim())) {
            alert("המשימה הזו כבר קיימת ברשימה!");
            setInputValue("");
            return;
        }

        setArrTodo([...arrTodo, inputValue.trim()]);
        setInputValue("");
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {arrTodo.map((todo, index) => (
                    <ToDoItem key={index} todo={todo} />
                ))}
            </ul>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Add a new todo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">OK</button>
            </form>
        </div>
    );
}