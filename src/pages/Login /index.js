import React, { useState, useContext } from "react";
import { AuthContext } from "../../Store/Contexts/AuthContext";
import { Ring } from "react-spinners-css";

import "./styles.css";

export default function Login() {
  const { authServices } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await authServices.login(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("usuário ou senha incorretos");
    }
  }

  return (
    <div className="container">
      <h3>Entre com sua conta de administrador</h3>
      <form onSubmit={login}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        {loading ? (
          <Ring className="spinner" color="#a0a0b2" size={40} />
        ) : (
          <button type="submit">Entrar</button>
        )}
      </form>
    </div>
  );
}
