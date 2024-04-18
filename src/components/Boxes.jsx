import { Link } from "react-router-dom";

function Boxes() {
  const titles = [
    {
      title: "services",
      style: "bg-violet-400",
      page: "/services/",
    },
    {
      title: "about us",
      style: "bg-rose-400",
      page: "/about-us/",
    },
    {
      title: "contact",
      style: "bg-cyan-400",
      page: "/contact/",
    },
    {
      title: "our mission",
      style: "bg-yellow-400",
      page: "/our-mission/",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border-t-4 border-black">
      {titles.map((item, index) => (
        <Link
          key={index}
          to={item.page}
          className={`h-72 font-bold text-6xl text-center flex justify-center items-center border-4 border-black ${item.style}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Boxes;
