import "../App.css";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { MdCancel, MdWbSunny } from "react-icons/md";
import { useState } from "react";
import { motion } from "motion/react";
import { IoLanguage, IoMoon } from "react-icons/io5";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  const menuVarients = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };
  return (
    <section className="w-[80%] m-auto">
      <div className="fixed top-2 w-full backdrop-blur-2xl shadow-white/5 bg-white/5  flex items-center justify-between h-12 px-12 rounded-full text-white z-50 md:w-[80%] m-auto">
        {/* Logo */}
        <div>
          <Link to="/">Anik Dey</Link>
        </div>
        {/* Navigation Bar */}
        <nav>
          <ul className="hidden md:flex gap-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Dark Mode and language Button */}
        <div className="flex gap-4">
          <IoLanguage size={25} />
          <div onClick={toggleDarkmode}>
            {darkmode ? <MdWbSunny size={25} /> : <IoMoon size={25} />}
          </div>
        </div>
        {/* Mobile Menu btn */}
        <div onClick={toggleNav} className="md:hidden z-50">
          {nav ? <MdCancel size={30} /> : <FaBars size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVarients}
          className="fixed top-0 left-0 w-full min-h-screen bg-gray-800 text-white font-semibold gap-8 z-30 md:hidden"
        >
          <ul className="h-screen flex flex-col gap-8 items-center justify-center">
            <li>
              <NavLink onClick={closeNav} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/">
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
