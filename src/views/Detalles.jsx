import Navbar from "../components/Navbar";
import { PizzaContext } from "../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalles = () => {
  const [detallesPizza, setDetallesPizza] = useState({});
  const { pizzas, agregarCarrito } = useContext(PizzaContext);
  const { id } = useParams();

  const obtenerDetalles = () => {
    const pizzaSeleccionada = pizzas.find((pizza) => pizza.id === id);

    setDetallesPizza(pizzaSeleccionada || {});
  };

  useEffect(() => {
    obtenerDetalles();
  }, [pizzas]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={detallesPizza.img}
                className="img-fluid rounded-start"
                alt={detallesPizza.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {detallesPizza.name}
                </h5>
                <p className="card-text">{detallesPizza.desc}</p>
                <ul>
                  {detallesPizza.ingredients?.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${detallesPizza.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => agregarCarrito(detallesPizza)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalles;
