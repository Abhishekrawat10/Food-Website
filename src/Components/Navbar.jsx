import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.png";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [menu, isMenu] = useState(true);
  const [cross, isCross] = useState(false);
  const changeMenu = () => {
    isMenu(false);
    isCross(true);
  };
  const changeCross = () => {
    isCross(false);
    isMenu(true);
  };

  return (
    <>
      <nav className="w-full h-15 flex center justify-around px-4 md:px-6 items-center fixed top-4 z-5">
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
        {menu && (
          <div className="md:hidden">
            <FontAwesomeIcon
              className="text-2xl menu-icon "
              onClick={changeMenu}
              icon={faBars}
            />
          </div>
        )}
        {cross && (
          <div className=" md:hidden cross transform">
            <FontAwesomeIcon icon={faX} size="xl" onClick={changeCross} />
          </div>
        )}
      </nav>
      {cross && (
        <div className="w-full bg-slate-600 h-screen text-center fixed top-[60px] z-10">
          <ul className="h-full flex flex-col justify-center gap-10">
            <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms">
              Home
            </li>
            <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms">
              Product
            </li>
            <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms">
              Faq
            </li>
            <li className="cursor-pointer hover:scale-150 transition ease-in-out duration-150ms">
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
