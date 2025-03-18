import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


export const Footer = () => {
  return (
    <section className="bg-[#09090b] py-8 text-white">
      <div className="md:w-[80%] m-auto flex flex-col justify-between items-center border-t py-2 px-4 md:flex-row">
        <div className="font-light mb-4">
          {" "}
          &copy; 2025 Anik Dey | All Rights Reserved.{" "}
        </div>
        <div>
          <ul className="flex gap-6">
            <Link to="/">
            <MdOutlineMail size={23}/>

            </Link>
            <Link to="/">
              <FaLinkedin size={20}/>
            </Link>
            <Link to="/">
              <FaGithub  size={20}/>
            </Link>
            <Link to="/">
              <FaXTwitter  size={20}/>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};
