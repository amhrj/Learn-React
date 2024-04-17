import { useState } from "react";

export default function ConditionalRendering() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <h1>I am Conditionally Rendering</h1>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled ? <p>I am conditionally rendered</p> : null}
    </>
  );
}
