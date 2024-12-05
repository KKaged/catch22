export default function Why() {
  return (
    <>
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              We Don’t Just Run Campaigns, We Build Strategies That Deliver
            </h2>
            <p className="mb-4">
              At Catch22, we focus on creating tailored strategies that drive
              real engagement, increase brand awareness, and convert followers
              into loyal customers.
            </p>
            <p>
              With a team of skilled marketers, designers, and content creators,
              we ensure every campaign aligns with your brand's goals. Our
              data-driven approach helps you maximize ROI while staying ahead in
              the competitive digital landscape.
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
