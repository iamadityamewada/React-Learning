import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment_func = () => {
    count >= 10 ? setCount(10) : setCount(count + 1);
  };

  const decrement_func = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const reset_func = () => setCount(0);

  return (
    <div>
      <h1>COUNTER</h1>
      <h1>{count}</h1>
      <button onClick={increment_func}>Increase</button>
      <button onClick={decrement_func}>Decrease</button>
      <button onClick={reset_func}>Reset</button>
    </div>
  );
};

export default Counter;
