import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img, addToCart }) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h4 className="text-capitalize">{name}</h4>

        <ul className="list-unstyled">
          {ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>

        <h5>${price.toLocaleString("es-CL")}</h5>

        <div className="d-flex justify-content-around">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            Ver más 👀
          </Link>

          <button onClick={addToCart} className="btn btn-dark">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
