import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas"

function Home() {
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