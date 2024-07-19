import { useState } from "react";

const Advance_count = () => {
  const [num, setNum] = useState(0);

  const [count, setCount] = useState(0);

  const storeText = (event) => {
    const val = parseInt(event.target.value);
    val > 10
      ? alert("Increment/Decrement values cannot be greater than 10")
      : setNum(event.target.value);
  };

  const inc_func = () => {
    count >= 100 ? setCount(count) : setCount(count + +num);
  };

  const dec_func = () => {
    count <= 0 ? setCount(0) : setCount(count - Number(num));
  };

  const reset_func = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>COUNTER</h1>
      <br />
      <input
        type="text"
        onChange={storeText}
        value={num}
        placeholder="enter a number"
      />
      <br />
      <br />
      <h1>{count}</h1>
      <button onClick={inc_func}>increment</button>
      <button onClick={dec_func}>decrement</button>
      <button onClick={reset_func}>reset</button>
    </div>
  );
};

export default Advance_count;
