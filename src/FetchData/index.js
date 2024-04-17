import { useEffect, useState } from "react";

export default function FetchData() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        const topTen = json.slice(0, 10);
        setitems(topTen)
      });
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <button onClick={() => setResourceType("albums")}>Albums</button>
        <button onClick={() => setResourceType("photos")}>Photos</button>
        <button onClick={() => setResourceType("todos")}>To Do</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
