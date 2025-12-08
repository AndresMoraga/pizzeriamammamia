import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("❌ Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("✅ Login exitoso");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>

      <form
        className="mx-auto"
        style={{ maxWidth: "450px" }}
        onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
