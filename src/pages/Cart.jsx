import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  return (
    <div className="container mt-4">
      <h3>Detalles del pedido</h3>

      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} width={70} />
            <span>{pizza.name}</span>
          </div>

          <div>
            <button onClick={() => removeFromCart(pizza.id)}>-</button>
            <span className="mx-2">{pizza.count}</span>
            <button onClick={() => addToCart(pizza)}>+</button>
          </div>

          <span>
            ${(pizza.price * pizza.count).toLocaleString("es-CL")}
          </span>
        </div>
      ))}

      <hr />

      <h4>Total: ${total.toLocaleString("es-CL")}</h4>

      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;