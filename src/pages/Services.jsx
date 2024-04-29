import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Nav />
      <section className="border-8 p-16 border-black bg-violet-400 flex">
        <div>
          <h1 className="text-6xl font-bold">services</h1>
          <p className="font-medium text-2xl py-14 w-2/3 text-left">
            <span className="font-extrabold text-2xl">Catch22 </span>
            revolutionizes software engineering talent acquisition. Our platform
            connects companies with our skilled engineers for flexible,
            quality-driven projects. With a focus on continuous learning, we
            empower engineers to excel in a rapidly evolving digital landscape.
            Serving startups to large corporations, we offer value through
            affordable service fees, subscriptions, and premium options. Join us
            in transforming tech staffing and <br />
            <span className="font-extrabold underline underline-offset-4">
              YOUR COMPANY!
            </span>
          </p>
        </div>

        <p className="font-medium text-2xl py-28 text-right w-full">
          Ready to take the next step in building assets for your company?{" "}
          <br />
          <span className="font-bold text-2xl">
            <Link to={"/contact/"}>Reach out!</Link>
          </span>
        </p>
      </section>
    </>
  );
}

export default Services;
