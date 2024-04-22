import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Nav from "./components/Nav";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("EN");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log("language", lang);
  };

  return (
    <>
      <Nav
        leftChildren={
          language === "EN" ? (
            <>
              Catch22 is an agency for startups in{" "}
              <span className="font-bold">Japan</span>
            </>
          ) : (
            <>Catch22はスタートアップのためのエージェンシーです</>
          )
        }
        rightChildren={
          language === "EN" ? (
            <>
              <p className="text-xl font-medium tracking-wide leading-7">
                We are <span className="font-bold">hiring</span> engineers!
              </p>
              <p className="text-xl font-medium tracking-wide leading-7">
                for more information{" "}
                <span className="font-bold">contact us</span>
              </p>
            </>
          ) : (
            <>
              <p className="text-xl font-medium tracking-wide leading-7">
                エンジニアを<span className="font-extrabold">募集</span>
                しています！
              </p>
              <p className="text-xl font-medium tracking-wide leading-7">
                詳細は<span className="font-bold">お問い合わせ</span>ください
              </p>
            </>
          )
        }
      ></Nav>

      <Boxes />
      <Footer>
        <button onClick={() => handleLanguageChange("EN")}>EN</button>
        {" | "}
        <button onClick={() => handleLanguageChange("JA")}>JA</button>
      </Footer>
    </>
  );
}

export default App;
