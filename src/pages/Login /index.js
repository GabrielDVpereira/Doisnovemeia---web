import React, { useState, useContext } from "react";
import { AuthContext } from "../../Store/Contexts/AuthContext";
export default function Login() {
  const { authServices } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    await authServices.login(email, password);
  }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
