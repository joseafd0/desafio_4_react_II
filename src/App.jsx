import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Detalles from "./views/Detalles";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import Error404 from "./views/Error404";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="pizzas/:id" element={<Detalles />} />

        <Route path="/carrito" element={<Carrito />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
export default App;
