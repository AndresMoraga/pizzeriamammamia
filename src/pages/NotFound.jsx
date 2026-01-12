import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="fs-5">Página no encontrada</p>

      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio 🍕
      </Link>
    </div>
  );
};

export default NotFound;