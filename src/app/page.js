"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

import logo from "../../public/mar-logo.svg";
import profil from "../../public/profile-image.png";
import androidIllustration from "../../public/specialist-section/android-illustration.svg";
import responsiveIllustration from "../../public/specialist-section/responsive-illustration.svg";
import websiteIllustration from "../../public/specialist-section/website-illustration.svg";

import portfolio_1 from "../../public/portfolio/(1)Grapesense.png";
import portfolio_2 from "../../public/portfolio/(2)Ok.Docs.png";
import portfolio_3 from "../../public/portfolio/(3)ATMBank.png";
import portfolio_4 from "../../public/portfolio/(4)Portfolio-1.png";
import portfolio_5 from "../../public/portfolio/(5)IniCoding.png";
import portfolio_6 from "../../public/portfolio/(6)WeeBoo.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-900">
        <main className="container mx-auto px-10 ">
          <section>
            <nav className="py-10 mb-12 flex justify-between">
              <Image
                src={logo}
                alt="logo"
                width={65}
                className="dark:invert hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-500 cursor-pointer"
              />
              <ul className="flex items-center gap-4">
                <li className="hover:scale-110 hover:-translate-y-1 transition-all ease-in-out duration-500">
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-xl dark:text-white"
                    onClick={() => setDarkMode(!darkMode)}
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
                Hai, saya Akbar ~ Seorang pengembang web front-end dengan fokus
                pada desain responsif dan interaktif. Selamat Datang
              </p>
            </div>
            <div className="text-3xl flex justify-center gap-8 py-3 dark:text-gray-200">
              <a href="https://www.instagram.com/marmdhn_/" target="blank">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/in/marmdhn/" target="blank">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/makbarramadhan62" target="blank">
                <AiFillGithub />
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-8 overflow-hidden hover:grayscale hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer">
              <Image src={profil} alt="profil-image" />
            </div>
          </section>

          <section className="py-24">
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold dark:text-gray-200">
                Interest
              </h3>
              <p className="text-sm font-semibold text-gray-800 py-4 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, recusandae repellat consectetur obcaecati quidem
                voluptatibus!
              </p>
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="text-center shadow-lg py-8 rounded-lg md:w-1/3 dark:bg-white dark:shadow-gray-600 hover:scale-105 transition-all ease-in-out duration-500">
                <Image
                  src={websiteIllustration}
                  alt="website-illustration"
                  className="inline-flex mb-8"
                />
                <p className="text-md font-bold text-gray-800">Website</p>
              </div>
              <div className="text-center shadow-lg py-8 rounded-lg md:w-1/3 dark:bg-white dark:shadow-gray-600 hover:scale-105 transition-all ease-in-out duration-500">
                <Image
                  src={androidIllustration}
                  alt="website-illustration"
                  className="inline-flex mb-8"
                />
                <p className="text-md font-bold text-gray-800">Android</p>
              </div>
              <div className="text-center shadow-lg py-8 rounded-lg md:w-1/3 dark:bg-white dark:shadow-gray-600 hover:scale-105 transition-all ease-in-out duration-500">
                <Image
                  src={responsiveIllustration}
                  alt="website-illustration"
                  className="inline-flex mb-8"
                />
                <p className="text-md font-bold text-gray-800">
                  Responsive Design
                </p>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold dark:text-gray-200">
                Portfolio
              </h3>
              <p className="text-sm font-semibold text-gray-800 py-4 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, recusandae repellat consectetur obcaecati quidem
                voluptatibus!
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-4">
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_1}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_2}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_3}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_4}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_5}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-2 flex-1 hover:-translate-y-4 hover:scale-105 transition-all ease-in-out duration-500">
                  <Image
                    src={portfolio_6}
                    alt="website-illustration"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center mt-8 hover:scale-105 transition-all ease-in-out duration-500">
                <a
                  href="https://drive.google.com/file/d/15TNNjQscxAsyz7z0pD6nd7eDbQusf8Jw/view?usp=drive_link"
                  target="blank"
                  className="bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg"
                >
                  Lihat Semua
                </a>
              </div>
            </div>
          </section>

          <footer className="py-8">
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span>
              <a
                href="https://www.instagram.com/marmdhn_/"
                target="_blank"
                className="font-bold text-primary"
              >
                Muhammad Akbar Ramadhan
              </a>
              , menggunakan
              <a
                href="https://tailwindcss.com"
                target="_blank"
                className="font-bold text-sky-500"
              >
                tailwind CSS
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
