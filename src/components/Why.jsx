export default function Why() {
  return (
    <>
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              We Don’t Just Build Products, We Build MVPs That Matter
            </h2>
            <p className="mb-4">
              At our MVP agency, we focus on building lean, effective, and
              user-centered MVPs that allow you to quickly test your ideas,
              validate them with real users, and iterate based on feedback.
            </p>
            <p>
              With a team of experienced strategists, designers, and developers,
              we ensure that every product we build aligns with your vision
              while keeping scope and timeline in check. We help you move fast
              without compromising quality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
