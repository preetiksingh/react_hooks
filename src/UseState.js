import React, { useState } from "react";

const UseState = () => {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  return (
    <div>
      <h2>Use State Hook Example</h2>
      <div>Hooks - {counter}</div>
      <button onClick={() => setCounter(counter + 1)}> INCREMENT</button>
    </div>
  );
};

export default UseState;
