import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Detalles del pedido:</h3>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} alt={pizza.name} width={70} />
            <span className="fw-semibold text-capitalize">
              {pizza.name}
            </span>
          </div>

          <span className="fw-semibold">
            ${pizza.price.toLocaleString("es-CL")}
          </span>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger"
              onClick={() => decrease(pizza.id)}
            >
              −
            </button>

            <span className="fw-semibold">{pizza.count}</span>

            <button
              className="btn btn-outline-primary"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>Total: ${total.toLocaleString("es-CL")}</h4>

      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;