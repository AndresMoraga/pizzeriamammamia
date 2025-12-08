import { Link } from "react-router-dom";

const Navbar = () => {
  const token = false;
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand mb-0 h1 text-white">
            Pizzería Mamma Mia!
          </span>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-outline-light">🍕 Home</Link>

            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
                <button className="btn btn-outline-light">🔒 Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
                <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
              </>
            )}
          </div>
        </div>

        <button
          className="btn fw-bold"
          style={{
            backgroundColor: "black",
            border: "2px solid #00bfff",
            color: "#00bfff"
          }}
        >
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
