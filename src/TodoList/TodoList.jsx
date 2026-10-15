export function TodoList() {
    const arrTodo = [
        "To do homework",
        "Clean the house",
        "Go shopping",
        "Read a book"
    ];

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {arrTodo.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>   
        </div>
    );
}