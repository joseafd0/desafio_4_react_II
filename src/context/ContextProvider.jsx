import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

export const ContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await fetch(".../public/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  const agregarCarrito = ({ id, price, name, img }) => {
    const productoEnElCarrito = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEnElCarrito >= 0) {
      carrito[productoEnElCarrito].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const incremento = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decremento = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        carrito,
        setCarrito,
        agregarCarrito,
        incremento,
        decremento,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};