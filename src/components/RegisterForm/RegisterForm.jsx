import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operatons";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}
