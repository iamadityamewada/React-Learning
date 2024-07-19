import { useState } from "react";
import Greeting from "./Greetings";
import Counter from "./Counter";
import Advance_count from "./AdvanceCounter";
import Todos from "./Todos";
import Login from "./Login";

const App = () => {
  let details = {
    name: "Aditya ",
    age: 23,
    email: "adityamewada2@gmail.com",
    address: {
      city: "bhopal",
      state: "Madhya Pradesh",
      pincode: 462022,
    },
    college: "LNCT",
  };
  return (
    <div className="container">
      {/* <Greeting data={details} />
      <br />
      <Counter />
      <br />
      <Advance_count />
      <br />
      <Todos /> */}
      <br />
      <Login/>
    </div>
  );
};

export default App;
