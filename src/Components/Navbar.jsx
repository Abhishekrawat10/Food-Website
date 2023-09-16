import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.png";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const changeMenu = () => {
    const menu = document.getElementsByClassName("menu");
    
  };
  return (
    <nav className="w-full h-15 flex center justify-around px-4 md:px-6 items-center sticky">
      <div>
        <img className="h-12 animate-slidein" src={Logo} alt="Logo" />
      </div>
      <ul className="hidden md:flex gap-8  ">
        <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms hover:border-b-5 border-indigo-500 animate-drop-down .">
          Home
        </li>
        <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms animate-drop-down">
          Product
        </li>
        <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms animate-drop-down">
          Faq
        </li>
        <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms animate-drop-down">
          Contact
        </li>
      </ul>
      <div className="md:hidden ">
        <FontAwesomeIcon
          className="text-2xl menu-icon menu"
          onClick={changeMenu}
          icon={faBars}
        />
      </div>
      <div className="hidden md:hidden ">
        <FontAwesomeIcon icon={faX} size="xl" />
      </div>
    </nav>
  );
};

export default Navbar;
