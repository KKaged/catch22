import { Link } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";

function App() {
  const titles = [
    {
      title: "Services",
      style: " bg-violet-400",
      page: "/services/",
    },
    {
      title: "About Us",
      style: " bg-rose-400",
      page: "/about-us/",
    },
    {
      title: "Contact",
      style: " bg-cyan-400",
      page: "/contact/",
    },
    {
      title: "Our Mission",
      style: " bg-yellow-400",
      page: "/our-mission/",
    },
  ];

  return (
    <>
      <Nav />
      <div className="border-4 w-screen border-black grid grid-cols-2 grid-rows-2 font-sans">
        {titles.map((title, index) => (
          <div
            key={index}
            className={`border-4 border-black flex justify-center items-center${title.style}`}
          >
            <Link
              className="text-4xl font-bold text-gray-900 p-28"
              to={`${title.page}`}
            >
              {title.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
