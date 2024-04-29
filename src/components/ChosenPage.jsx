import { Link } from "react-router-dom";

function ChosenPage({ pageColor, pageTitle, children }) {
  return (
    <section className={`border-8 p-16 border-black bg-${pageColor}-400 flex`}>
      <div className="w-2/5">
        <h1 className="text-6xl font-bold">{pageTitle}</h1>
        {children}
      </div>
      <p className="font-medium text-2xl py-28 text-right w-full">
        Ready to take the next step in building assets for your company? <br />
        <span className="font-bold text-2xl">
          <Link to={"/contact/"}>Reach out!</Link>
        </span>
      </p>
    </section>
  );
}

export default ChosenPage;
