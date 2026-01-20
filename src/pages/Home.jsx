import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid py-3 d-flex gap-4 justify-content-center flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            {...pizza}
            addToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;