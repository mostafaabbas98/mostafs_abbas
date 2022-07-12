import Link from 'next/link';
import {
  BsX,
  BsFillPersonFill,
  BsTools,
  BsFileEarmarkCodeFill,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const MobileMenu = ({ renderThemeChanger, setNav }) => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="bg-[#E5E5E5] dark:bg-[#14213D] shadow-xl shadow-slate-500/100 rounded-md">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="text-4xl outline-amber-500 font-caveat">
                  Mostafa Abbas
                </a>
              </Link>
            </div>
            <div className="flex place-items-center gap-2">
              {renderThemeChanger()}

              <div onClick={() => setNav(false)}>
                <span className="sr-only">Close menu</span>
                <BsX
                  size={18}
                  className="text-white bg-amber-500 rounded-sm cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8 divide-y divide-gray-300">
              <Link href="#about-me">
                <a
                  className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
                  onClick={() => setNav(false)}
                >
                  <BsFillPersonFill />
                  <span className="ml-3 text-base font-medium text-black dark:text-white">
                    About Me
                  </span>
                </a>
              </Link>

              <Link href="#skills">
                <a
                  className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
                  onClick={() => setNav(false)}
                >
                  <BsTools />
                  <span className="ml-3 text-base font-medium text-black dark:text-white">
                    Skills
                  </span>
                </a>
              </Link>

              <Link href="#projects">
                <a
                  className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
                  onClick={() => setNav(false)}
                >
                  <BsFileEarmarkCodeFill />
                  <span className="ml-3 text-base font-medium text-black dark:text-white">
                    Projects
                  </span>
                </a>
              </Link>

              <a
                href="https://www.linkedin.com/in/mostafa-abbas98/"
                target={'_blank'}
                rel="noreferrer"
                className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
              >
                <BsLinkedin />
                <span className="ml-3 text-base font-medium text-black dark:text-white">
                  Linkedin
                </span>
              </a>
              <a
                href="https://github.com/mostafaabbas98"
                target={'_blank'}
                rel="noreferrer"
                className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
              >
                <BsGithub />
                <span className="ml-3 text-base font-medium text-black dark:text-white">
                  Github
                </span>
              </a>
              <a
                href="mailto:mostafaabbas98@outlook.com"
                target={'_blank'}
                rel="noreferrer"
                className="-m-3 p-3 flex items-center hover:bg-amber-500 hover:text-white rounded"
              >
                <HiMail />
                <span className="ml-3 text-base font-medium text-black dark:text-white">
                  Email
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
