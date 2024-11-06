export default function Hero() {
  return (
    <header className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="https://www.lingo-academy.org/"
          className="animate-bounce inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          role="alert"
          aria-label="New project launch link"
        >
          <span className="text-xs bg-primary-600 rounded-full text-blue-700 px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Discover our latest MVP launch for a startup!
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Bringing Your MVP to Life
        </h1>
        <span className="underline decoration-blue-600 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          In Just One Month
        </span>
        <p className="mb-8 pt-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          As a dedicated startup agency, we specialize in MVP and website
          development to transform ideas into valuable products, empowering
          businesses from concept to launch.
        </p>
        {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#services"
            className="inline-flex text-black justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            aria-label="Learn more about our MVP services"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#demo"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            aria-label="Watch demo of our MVP process"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch demo
          </a>
        </div> */}
      </div>
    </header>
  );
}
