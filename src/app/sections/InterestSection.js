import Image from "next/image";
import websiteIllustration from "../../../public/specialist-section/website-illustration.svg";
import androidIllustration from "../../../public/specialist-section/android-illustration.svg";
import responsiveIllustration from "../../../public/specialist-section/responsive-illustration.svg";

export default function InterestSection() {
  return (
    <section className="py-24">
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold dark:text-gray-200">Interest</h3>
        <p className="text-sm font-semibold text-gray-800 py-4 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          recusandae repellat consectetur obcaecati quidem voluptatibus!
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
          <p className="text-md font-bold text-gray-800">Responsive Design</p>
        </div>
      </div>
    </section>
  );
}
