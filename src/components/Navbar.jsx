

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-gray-900">
      <div className="container mx-auto py-4">
        <ul className="flex justify-center md:justify-end space-x-4">
          <li className="text-white">
            <a href="#home">Home</a>
          </li>
          <li className="text-white">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-white">
            <a href="#about">About Me</a>
          </li>
          <li className="text-white">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
