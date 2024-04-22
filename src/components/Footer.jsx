import { Link } from "react-router-dom";

function Footer({ children }) {
  return (
    <footer className="border-4 border-b-8 border-black flex flex-col sm:flex-row p-8 justify-between">
      <div className="display space-between">{children}</div>
      <div>
        <p className="text-lg">
          © {new Date().getFullYear()} 株式会社PePe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
