import { useState } from "react";

export default function ContactFrom() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New contact", { name, number });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Write a name here"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="number"
        value={number}
        placeholder="Write a number here"
        onChange={(event) => setNumber(event.target.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
