import { useState } from "react";
import Input from "./Input";
import List from "./List";
import "./index.css";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    const add = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    };

    return (
        <div className="App_todo">
            <h1>ToDo List</h1>
            <Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <List list={todos} remove={add} />
        </div>
    );
};

export default App;