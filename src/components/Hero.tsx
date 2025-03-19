import { Link } from "react-router-dom";
// import profile from "../assets/profile.png";
// import profile from "../assets/icpc.png";
import profile from "../assets/Batman.jpeg";
import { FaJsSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="text-center">
      {/* Image */}
      <div className="w-full flex items-center justify-center py-10">
        <img
          src={profile}
          alt="profile"
          className="h-[200px] w-[200px] rounded-full border-2 mt-8 bg-white"
        />
      </div>
      {/* Name */}
      <div>
        <h1 className="text-3xl text-white font-semibold mb-4">Anik Dey</h1>
      </div>
      {/* button */}
      <div className="w-full flex justify-center">
        <button
        
         className="flex gap-2 items-center justify-center mt-4 mb-8 border-1 px-4 py-2 rounded-3xl bg-gray-900 text-white ">
          <motion.span
          animate={{scale: 1.3, opacity: 0.3}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          >

          <GoDotFill size={20} color={"green"}/>
          </motion.span>
          Open to work
        </button>
      </div>
      {/* Links */}
      <div>
        <ul className="w-full flex flex-col items-center gap-4 md:flex-row justify-around md:gap-4 text-white">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaJsSquare size={20} color="yellow" />
              Mern Stack Dev
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaLocationDot color="red"/>
              Sylhet, Bangladesh
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaLinkedin size={20} color="#0c64c5" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaGithub size={20} />
              Github
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
