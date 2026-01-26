import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, [id]);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container mt-5">
      <img src={pizza.img} className="img-fluid rounded" />
      <h2 className="mt-3">{pizza.name}</h2>
      <p>{pizza.desc}</p>

      <ul>
        {pizza.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <h4>${pizza.price.toLocaleString("es-CL")}</h4>
    </div>
  );
};

export default Pizza;
