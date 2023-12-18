const Input = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="todos">
            <input
                type="text"
                name="todo"
                value={todo}
                placeholder="Do..."
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button className="add_todo_button" onClick={addTodo}>
                Add
            </button>
        </div>
    );
};

export default Input;