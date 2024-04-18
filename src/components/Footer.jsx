import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-4 border-b-8 border-black flex flex-col sm:flex-row p-8 justify-between">
      <div className="mb-4 sm:mb-0">
        <p className="text-3xl sm:text-lg font-bold">
          <Link to={"/contact/"}>Let's Talk!</Link>
        </p>
      </div>
      <div>
        <p className="text-lg">
          © {new Date().getFullYear()} 株式会社PePe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
