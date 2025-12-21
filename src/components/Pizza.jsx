import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error(error));
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h4 className="fw-bold mt-3">
            ${pizza.price.toLocaleString("es-CL")}
          </h4>

          <button className="btn btn-dark mt-3">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
