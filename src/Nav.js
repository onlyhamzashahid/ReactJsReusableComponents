import React ,{useState} from "react";
// using ionicons library for icons
import {LogoIonic, Menu, Close } from "react-ionicons";
// importing button 
import Button from "./Button";



const Nav = () => {
const [open, setOpen] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">

      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">

        <div className="font-bold text-2xl cursor-pointer flex items-center ">

          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <LogoIonic />
          </span>
          
          Company
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <div>{open ? <Menu /> : <Close />}</div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
          ${open ? "Top-20 opacity-0" : "Top-[-490px]"} md:opacity-100 `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
