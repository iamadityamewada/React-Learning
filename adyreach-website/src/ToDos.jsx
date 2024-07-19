import React, { useState } from "react";
const ToDos = () => {
  const [text, setText] = useState(0);
  const [allTodos, setAllTodos] = useState([]);

  const onTextChange = (e) => {
    let value = Number(e.target.value);
    if (value > 10) {
        setText(0);
        alert("NJKVBSJKNDJK");
      
    } else {
      setText(e.target.value);
    }
  };

  const onBtnClick = () => {
    setAllTodos([text, ...allTodos]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onTextChange} type="number" />
      <button onClick={onBtnClick} className="btn">
        Add
      </button>

      <p>Here is list of My Task</p>
      {allTodos.map((oneTodo, index) => {
        return <p>{oneTodo}</p>;
      })}
    </div>
  );
};

export default ToDos;
