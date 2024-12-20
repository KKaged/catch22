import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Why from "./components/Why";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("EN");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log("language", lang);
  };

  return (
    <>
      <Nav />
      <Hero />
      <Why />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
