function Navbar() {
  return (
    <header className="text-gray-400  bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a
          href="#home"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            alt="logo"
            className="w-40"
            src="https://futureinsights.in/img/Future-Insights-621-X-220-px%20copy.png"
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 text-white hover:text-white">
            Home
          </a>
          <a href="#home" className="mr-5 hover:text-white">
            About Us
          </a>
          <a href="#home" className="mr-5 hover:text-white">
            Services
          </a>
          <a href="#home" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
