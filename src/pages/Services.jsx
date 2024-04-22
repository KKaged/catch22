import Nav from "../components/Nav";

function Services() {
  return (
    <>
      <Nav />
      <section className="border-8 p-12 border-black bg-violet-400">
        <h1 className="text-6xl font-bold">services</h1>
        <p className="font-medium py-12 w-1/2">
          <span className="font-extrabold text-2xl">Catch22 </span>
          revolutionizes software engineering talent acquisition. Our platform
          connects companies with skilled engineers for flexible, quality-driven
          projects. With a focus on continuous learning, we empower engineers to
          excel in a rapidly evolving digital landscape. Serving startups to
          large corporations, we offer value through service fees,
          subscriptions, and premium options. Join us in transforming tech
          staffing.
        </p>
      </section>
    </>
  );
}

export default Services;
