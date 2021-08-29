// import "./Header.css";
import { ReactComponent as MenuSVG } from "../../assets/img/phantom-logo.svg";
const Header = () => {
  return (
    <nav className="flex justify-between md:justify-center items-center px-7 py-3">
      <MenuSVG />
      <ul className="hidden list-none md:flex mx-auto text-gray-500 gap-11 text-lg">
        <li className="hover:text-[#4e44ce] cursor-pointer">Overview</li>
        <li>Security</li>
        <li>Blog</li>
        <li>Help</li>
      </ul>
      <a className=" font-bold hidden md:flex text-white bg-[#4e44ce] rounded-3xl  px-4 py-2">
        Add to Chrome
      </a>
      <svg
        className="md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
        class="w-9 h-9"
        aria-hidden="true"
      >
        <path
          className="md:hidden"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </nav>
  );
};

export default Header;
