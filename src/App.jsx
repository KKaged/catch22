import "./App.css";
import Header from "./components/Header";
import HeaderRight from "./components/HeaderRight";
import Nav from "./components/Nav";

function App() {
  const titles = [
    {
      title: "Services",
      style: " bg-violet-400",
    },
    {
      title: "About Us",
      style: " bg-rose-400",
    },
    {
      title: "Contact",
      style: " bg-cyan-400",
    },
    {
      title: "Our Mission",
      style: " bg-yellow-400",
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
            <p className="text-4xl font-bold text-gray-900 p-28">
              {title.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
