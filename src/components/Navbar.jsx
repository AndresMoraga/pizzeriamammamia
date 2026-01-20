import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Pizzería Mamma Mía
      </Link>

      <div className="d-flex gap-3">
        <Link className="btn btn-outline-light" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-light" to="/login">
          Login
        </Link>
        <Link className="btn btn-outline-light" to="/register">
          Register
        </Link>
        <Link className="btn btn-outline-light" to="/profile">
          Profile
        </Link>

        <Link to="/cart" className="btn btn-outline-info">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;