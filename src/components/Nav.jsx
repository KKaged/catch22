import Header from "./Header";
import HeaderRight from "./HeaderRight";
function Nav() {
  return (
    <nav className="border-4 border-black grid grid-cols-2 grid-rows-1 font-sans ">
      <Header />
      <HeaderRight />
    </nav>
  );
}

export default Nav;
