import logo from "../assets/CATCH22 v2.png";

function Header() {
  return (
    <div className="h-32 px-6 border-4 border-black flex flex-row justify-between items-center">
      <div>
        <img className="h-auto" src={logo} alt="logo" />
      </div>
      <div>
        <p className="w-52 text-right text-xl font-medium tracking-wide leading-7">
          Catch22 is an agency for startups in{" "}
          <span className="font-bold"> Japan</span>
        </p>
      </div>
    </div>
  );
}
export default Header;
