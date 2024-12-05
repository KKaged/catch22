import Nav from "../components/Nav";

function AboutUs() {
  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen py-10 px-5 sm:px-20">
        {/* About Us Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-5">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Based in the vibrant city of Yokohama, Japan, we specialize in
            helping Japanese companies expand their reach into global markets,
            while also assisting international businesses in successfully
            entering the Japanese market. Our mission is to bridge cultural and
            market gaps with innovative strategies, creating opportunities that
            transcend borders. With a focus on personalized service and
            measurable results, we aim to empower businesses to thrive in the
            interconnected world of today.
          </p>
        </section>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
          {/* Mission Section */}
          <section className="text-center mb-10 flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to help businesses break down barriers and seize
              global opportunities. By combining advanced marketing strategies
              with cultural insights, we enable clients to craft a powerful
              online presence and expand into new markets, driving meaningful
              connections with audiences worldwide.
            </p>
          </section>

          {/* Vision Section */}
          <section className="text-center mb-10 flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a world where businesses can seamlessly enter global
              markets without fear of cultural or logistical challenges. Our
              goal is to be the agency that empowers companies to create lasting
              impacts, fostering innovation and inclusivity across borders.
            </p>
          </section>
        </div>

        {/* Values or Closing Statement */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Catch22, we pride ourselves on our deep understanding of Japanese
            and international markets. Our team is passionate about delivering
            results and is dedicated to providing tailored solutions that meet
            the unique needs of each client. Whether you're looking to expand
            globally or establish your brand in Japan, we are here to guide you
            every step of the way.
          </p>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
