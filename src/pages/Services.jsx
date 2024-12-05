import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Nav />
      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl text-center">
        <div className="font-light text-gray-500 sm:text-lg mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-5">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            At Catch22, we specialize in helping businesses grow their online
            presence and reach new customers. Our team of experts crafts
            customized social media marketing strategies that deliver measurable
            results. Whether you're a startup or an established company, we
            provide affordable and scalable solutions tailored to your needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            We offer a wide range of services, including:
          </p>
          <ul className="list-none pl-5 mt-3 text-gray-700 text-center mx-auto max-w-md font-bold">
            <li>Social Media Strategy Development</li>
            <li>Content Creation & Management</li>
            <li>Paid Advertising Campaigns</li>
            <li>Social Media Analytics & Reporting</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
      </section>

      <section className="text-center py-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Ready to take your brand to the next level? Let’s work together to
          create a lasting impact on your target audience and build your
          business’s digital presence.
        </p>
        <p className="font-bold text-xl text-gray-900">
          <Link to={"/contact/"} className="text-blue-600 hover:underline">
            Get in Touch Today!
          </Link>
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Services;
