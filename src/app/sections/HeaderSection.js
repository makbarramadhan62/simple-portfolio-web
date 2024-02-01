import Image from "next/image";
import logo from "../../../public/mar-logo.svg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import profil from "../../../public/profile-image.png";

export default function HeaderSection({ onDarkMode }) {
  return (
    <section>
      <nav className="py-10 mb-12 flex justify-between">
        <Image
          src={logo}
          alt="logo"
          width={65}
          className="dark:invert hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-500 cursor-pointer"
        />
        <ul className="flex items-center gap-4">
          <li className="hover:scale-110 hover:-translate-y-1 transform hover:rotate-90 transition-all ease-in-out duration-500">
            <BsFillMoonStarsFill
              className="cursor-pointer text-xl dark:text-white"
              onClick={onDarkMode}
            />
          </li>
          <li className="hover:scale-105 transition-all ease-in-out duration-500">
            <a
              href="https://drive.google.com/file/d/1lr-tnTHyDB9frexXZrtry3fsgu_ahZlB/view?usp=drive_link"
              target="blank"
              className="bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg "
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center">
        <h2 className="text-4xl font-semibold uppercase text-cyan-500 py-2">
          marmdhn
        </h2>
        <h3 className="text-lg font-semibold dark:text-gray-100">
          Front End Developer
        </h3>
        <p className="text-sm font-semibold text-gray-800 py-4 sm:w-1/2 sm:mx-auto dark:text-gray-200">
          Hai, saya Akbar ~ Seorang pengembang web front-end dengan fokus pada
          desain responsif dan interaktif. Selamat Datang
        </p>
      </div>
      <div className="text-3xl flex justify-center gap-8 py-3 dark:text-gray-200">
        <a
          href="https://www.instagram.com/marmdhn_/"
          target="blank"
          className="hover:scale-110 hover:-translate-y-1 transform transition-all ease-in-out duration-500"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/marmdhn/"
          target="blank"
          className="hover:scale-110 hover:-translate-y-1 transform transition-all ease-in-out duration-500"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/makbarramadhan62"
          target="blank"
          className="hover:scale-110 hover:-translate-y-1 transform transition-all ease-in-out duration-500"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-8 overflow-hidden hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer">
        <Image src={profil} alt="profil-image" />
      </div>
    </section>
  );
}
