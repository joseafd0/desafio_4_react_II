import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Pizzas from "../components/Pizzas";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Pizzas>
        <Card />
      </Pizzas>
    </>
  );
};

export default Home;
