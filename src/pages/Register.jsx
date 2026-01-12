import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass1 || !pass2) {
      alert("❌ Todos los campos son obligatorios");
      return;
    }

    if (pass1.length < 6) {
      alert("❌ La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    if (pass1 !== pass2) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    alert("✅ Registro exitoso");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>

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
          onChange={(e) => setPass1(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm your password"
          onChange={(e) => setPass2(e.target.value)}
        />

        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
