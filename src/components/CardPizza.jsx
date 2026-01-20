const CardPizza = ({ name, price, ingredients, img, addToCart }) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h4>{name}</h4>

        <ul>
          {ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>

        <h5>${price.toLocaleString("es-CL")}</h5>

        <button onClick={addToCart} className="btn btn-dark">
          Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;