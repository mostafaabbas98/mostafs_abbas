import Image from 'next/image';
import profileImage from '../public/backgroundImage.png';
const AboutMe = () => {
  return (
    <section id="about-me" className="w-full pt-32">
      <h1 className="text-2xl text-center font-semibold underline decoration-double pb-6 text-amber-500">
        About Me
      </h1>
      <div className="w-full md:w-5/6 mx-auto flex p-4 md:justify-evenly">
        <div className="md:basis-2/3 flex place-items-center">
          <ul className="aboutLists w-full md:w-4/5">
            <li className="relative py-5 pl-6 font-bold cursor-pointer before:absolute before:w-2 before:h-2 before:bg-black dark:before:bg-white before:left-0 before:top-7 before:rounded-xl before:transition-all after:absolute after:border-l after:border-dotted after:border-black dark:after:border-white after:left-[3px] after:top-10 after:-bottom-5">
              I'm a highly talented Frontend Developer aiming to achieve high
              career growth through a continuous process of learning.
            </li>
            <li className="relative py-5 pl-6 font-bold cursor-pointer before:absolute before:w-2 before:h-2 before:bg-black dark:before:bg-white before:left-0 before:top-7 before:rounded-xl before:transition-all after:absolute after:border-l after:border-dotted after:border-black dark:after:border-white after:left-[3px] after:top-10 after:-bottom-5">
              I recently graduated from Faculty of Computing and Artificial
              Intelligence colleges at Beni-Suef university from the Computer
              Science department.
            </li>

            <li className="relative py-5 pl-6 font-bold cursor-pointer before:absolute before:w-2 before:h-2 before:bg-black dark:before:bg-white before:left-0 before:top-7 before:rounded-xl before:transition-all">
              I love the web field and specialize in frontend development with
              javascript and its frameworks especially react.js and next.js.
            </li>
          </ul>
        </div>
        <div className="hidden md:flex place-items-center justify-center basis-1/3">
          <Image
            src="/myphoto.png"
            width={250}
            height={350}
            priority
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
