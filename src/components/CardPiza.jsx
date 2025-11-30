const CardPiza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow-sm" style={{ width: "22rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h3 className="card-title">{name}</h3>

        <p className="text-muted">
          Ingredientes:
          <br />
          {ingredients.join(", ")}
        </p>

        <h4 className="fw-bold">${price.toLocaleString()}</h4>

              <div className="d-flex justify-content-around mt-3">
                  <button className="btn btn-outline-dark">Ver más 👀</button>
                  <button className="btn btn-dark">Añadir 🛒</button>
              </div>
          </div>
    </div>
  );
};

export default CardPiza;