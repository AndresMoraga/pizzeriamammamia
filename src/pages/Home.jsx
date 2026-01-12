import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />   
      <div className="container-fluid py-3 d-flex gap-4 justify-content-center flex-wrap">
      {pizzas.map((pizza) => (
        <CardPizza
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        />
      ))}
    </div>
    </>
  );
}

export default Home;