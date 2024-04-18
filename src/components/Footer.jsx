function Footer() {
  return (
    <footer className="border-4 border-b-8 border-black flex flex-col sm:flex-row p-7 justify-between">
      <div className="mb-4 sm:mb-0">
        <p className="text-3xl sm:text-lg font-bold">Let's Talk!</p>
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
