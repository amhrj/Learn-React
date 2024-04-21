import { useState } from "react";

export default function ConditionalRendering() {
  const [details, setdetails] = useState("");

  const handleChange = (e) => {
    setdetails(e.target.value);
  }
  
  return (
    <>
      <h1>Contact Form</h1>
      <input type="text" placeholder="Name" onChange={handleChange}></input>
      <p>Name: {details}</p>
    </>
  );
}
