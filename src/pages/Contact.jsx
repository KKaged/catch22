import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { User, Mail, MessageSquare, Phone } from "lucide-react";
import Nav from "../components/Nav";

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
                <Input
                  variant="underlined"
                  isRequired
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  startContent={<User color="rgb(78,101,122)" />}
                  className="w-full p-2.5 text-sm text-gray-900  border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <Input
                  variant="underlined"
                  isRequired
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  startContent={<Mail color="rgb(78,101,122)" />}
                  className="w-full p-2.5 text-sm text-gray-900  border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Phone Number
              </label>
              <Input
                variant="underlined"
                isRequired
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                startContent={<Phone color="rgb(78,101,122)" />}
                className="w-full p-2.5 text-sm text-gray-900  border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Message
              </label>
              <Textarea
                variant="underlined"
                isRequired
                id="message"
                name="message"
                placeholder="Your Message"
                startContent={<MessageSquare color="rgb(78,101,122)" />}
                className="w-full p-2.5 text-sm text-gray-900  border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                rows="6"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
