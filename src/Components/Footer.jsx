import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/Logo.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="w-full h-screen mt-10 flex-col">
      <div className="w-full h-[80%] bg-slate-800  flex-col text-center sm:bg-footerimg lg:bg-cover">
        <h1 className="text-4xl bold px-10 pt-[45%] text-white sm:pt-[10%] sm:bg-cover">
          Download the app now.
        </h1>
        <p className=" text-lg px-10 text-grey py-10 sm:text-2xl sm:text-white">
          Availabe on your favourite store. Start your premium experience now
        </p>
        <button className="px-4 mx-2 py-2 bg-orange rounded-full text-white text-lg border-2 border-orange">
          Playstore
        </button>
        <button className="px-4 py-2 rounded-full text-white text-lg border-[1px] ">
          App store
        </button>
      </div>
      <div className="w-full flex justify-center mt-4 ">
        <div className="sm:flex sm:justify-around sm:align-middle  w-[80%]">
          <img className="hidden sm:block" src={logo} alt="" />
          <div className="flex align-middle  justify-around sm:w-80">
            <FontAwesomeIcon
              className="text-orange text-4xl py-8"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-orange text-4xl py-8"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="text-orange text-4xl py-8"
              icon={faInstagram}
            />
          </div>
          <p className="sm:hidden text-center px-3">
            Just type what's on your mind and we'll serve.
          </p>
          <p className="hidden sm:block py-8">Copyright Bella Onojie.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
