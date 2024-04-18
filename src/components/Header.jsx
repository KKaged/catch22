import { Link } from "react-router-dom";
import logo from "../assets/CATCH22 v2.png";

function Header() {
  return (
    <div className="h-32 px-6 border-4 border-black border-b-0 flex flex-col md:flex-row justify-between items-center">
      <div>
        <Link to={"/"}>
          <img className="h-16" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="md:w-52">
        <p className="text-center md:text-right text-xl font-medium tracking-wide leading-7">
          Catch22 is an agency for startups in{" "}
          <span className="font-bold"> Japan</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
