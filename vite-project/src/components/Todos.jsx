import { useState } from "react";
import NewTodoList from "./TodosComponent";

const Todos = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const enteredText = (event) => {
    setText(event.target.value);
  };

  const add_todos = () => {
    setTasks([text, ...tasks]);
    setText("");
  };
  return (
    <div>
      <h1>TODO LIST</h1>
      <br />
      <input
        type="text"
        onChange={enteredText}
        value={text}
        placeholder="Enter Your Todos here"
      />
      <br />
      <br />
      <button onClick={add_todos}>Add Todos</button>
      <br />
      <br />
      <NewTodoList data={tasks} />
    </div>
  );
};
export default Todos;
