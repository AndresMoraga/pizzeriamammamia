import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Mamma Mía
      </Link>

      <div className="d-flex gap-3">
        <Link to="/" className="btn btn-outline-light">Home</Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">Profile</Link>
            <button onClick={logout} className="btn btn-outline-danger">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">Login</Link>
            <Link to="/register" className="btn btn-outline-light">Register</Link>
          </>
        )}

        <Link to="/cart" className="btn btn-outline-info">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
