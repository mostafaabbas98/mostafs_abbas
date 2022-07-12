import Link from 'next/link';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <main className="w-full h-screen flex justify-center place-items-center">
      <div className="flex flex-col space-y-8 z-10 text-center">
        <p className="md:pl-4 md:text-lg">
          Hello <span className="">👋</span>, I&apos;m
        </p>
        <h2 className="text-7xl font-bold text-center text-amber-500 font-caveat">
          Mostafa Abbas
        </h2>
        <h4 className="md:pl-4 md:text-lg">Front-End Developer</h4>
        <div className="flex justify-evenly">
          <a
            href="#about-me"
            className="text-white hover:text-white bg-amber-500 py-2 px-3 rounded"
          >
            About Me
          </a>

          <a
            href="https://drive.google.com/file/d/166jgQtrdvsn_7oC_W84KCAJgn37IxHSp/view?usp=sharing"
            target={'_blank'}
            className="text-white hover:text-white bg-amber-500 py-2 px-3 rounded"
          >
            Show CV
          </a>
        </div>
      </div>
      <Link href="/#about-me">
        <span className="absolute bottom-8 text-white animate-bounce cursor-pointer">
          <BsFillArrowDownCircleFill color="rgb(245 158 11)" size={20} />
        </span>
      </Link>
    </main>
  );
};

export default Hero;
