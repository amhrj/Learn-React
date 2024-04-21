import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState([]);

  function addNumber() {
    setCount([
      ...count,
      {
        id: count.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {count.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter;
