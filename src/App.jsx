import { Link } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Boxes />
      <Footer />
    </>
  );
}

export default App;
