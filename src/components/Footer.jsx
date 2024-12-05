import logo from "../assets/CATCH22 v2.png";

export default function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          <img src={logo} className="h-8" alt="Catch22 Logo" />
        </a>
        <p class="my-6 text-gray-500">
          Marketing for the businesses of tomorrow, today.
        </p>

        <span class="text-sm text-gray-500 sm:text-center">
          © 2024 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
