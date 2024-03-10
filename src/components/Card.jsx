import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/ContextProvider";

const Card = () => {
  const { pizzas, agregarCarrito } = useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div className="col" key={pizza.id}>
          <div className="card">
            <img className="card-img-top" src={pizza.img} alt="" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${pizza.price} USD
            </h2>

            <div className="d-flex justify-content-around mb-4">
              <button
                to={`pizza/${pizza.id}`}
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
                className="btn btn-info text-white"
              >
                Ver más
              </button>

              <button
                onClick={() => agregarCarrito(pizza)}
                className="btn btn-danger"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
