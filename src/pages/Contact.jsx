import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { User, Mail, MessageSquare, Phone } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current === null) {
      console.log("Form is empty");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            alert("Your message has been sent successfully!");
            console.log(result.status);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <Nav />
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
            Get in Touch
          </h2>
          <p className="mb-8 lg:mb-16 text-lg font-light text-center text-gray-500 sm:text-xl">
            Whether you’re ready to scale your business or need advice on your
            digital strategy, we’re here to help. Let’s connect and discuss how
            we can grow your brand together.
          </p>
          <form onSubmit={sendEmail} ref={form} className="space-y-8">
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <User color="rgb(78,101,122)" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-2.5 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Mail color="rgb(78,101,122)" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-2.5 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Phone color="rgb(78,101,122)" />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full pl-10 pr-2.5 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Message
              </label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <MessageSquare color="rgb(78,101,122)" />
                </span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full pl-10 pr-2.5 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
