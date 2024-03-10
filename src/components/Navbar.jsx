import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/ContextProvider";

const Navbar = () => {
  const { carrito } = useContext(PizzaContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link to="/" className="navbar_logo_nombre mx-1 mb-0">
            <h4 className="mb-0">Pizzeria Mamma Mia!</h4>
          </Link>

          <Link to="/carrito" className="navbar_logo_nombre mx-1 mb-0">
            <h4 className="mb-0">
              &#128722; {""} Total: ${total}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
