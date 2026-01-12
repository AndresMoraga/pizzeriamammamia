import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Pizzería Mamma Mía
      </Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="btn btn-outline-light">
          🛒 Total: $25.000
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
