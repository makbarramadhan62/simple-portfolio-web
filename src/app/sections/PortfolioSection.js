import Image from "next/image";
import portfolio_1 from "../../../public/portfolio/(1)Grapesense.png";
import portfolio_2 from "../../../public/portfolio/(2)Ok.Docs.png";
import portfolio_3 from "../../../public/portfolio/(3)ATMBank.png";
import portfolio_4 from "../../../public/portfolio/(4)Portfolio-1.png";
import portfolio_5 from "../../../public/portfolio/(5)IniCoding.png";
import portfolio_6 from "../../../public/portfolio/(6)WeeBoo.png";

export default function PortfolioSection() {
  return (
    <section className="py-24">
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold dark:text-gray-200">Portfolio</h3>
        <p className="text-sm font-semibold text-gray-800 py-4 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          recusandae repellat consectetur obcaecati quidem voluptatibus!
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
  );
}
