import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  BsLinkedin,
  BsGithub,
  BsSunFill,
  BsMoonFill,
  BsList,
} from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

import { useTheme } from 'next-themes';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    // not render unill page render first so js load and read theme from localsotrage
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsSunFill
          size={18}
          className="bg-amber-500 text-white rounded-sm p-1"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsMoonFill
          size={18}
          className="bg-amber-500 text-white rounded-sm p-1"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header className="fixed w-full z-20 bg-slate-100 dark:bg-[#14213D] shadow-lg shadow-slate-500/50">
      <div className="flex justify-between items-center p-6 md:justify-start md:space-x-10">
        {/* name */}
        <div className="lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="text-4xl outline-amber-500 font-caveat">
              Mostafa Abbas
            </a>
          </Link>
        </div>
        {/* nav btn */}
        <div className="md:hidden text-amber-500 border border-amber-500 rounded-md p-1 outline-amber-500">
          <button
            type="button"
            className="flex outline-none"
            aria-expanded="false"
            onClick={() => setNav(true)}
          >
            <span className="sr-only">Open menu</span>
            <BsList size={20} />
          </button>
        </div>
        {/* section */}
        <nav className="hidden md:flex place-items-center space-x-10 font-medium">
          <Link href="#about-me">
            <a className="">About Me</a>
          </Link>
          <Link href="#skills">
            <a className="">Skills</a>
          </Link>
          <Link href="#projects">
            <a className="">Projects</a>
          </Link>
        </nav>
        {/* links */}
        <div className="hidden md:flex gap-6 items-center justify-end md:flex-1 lg:w-0">
          <a
            href="https://www.linkedin.com/in/mostafa-abbas98/"
            target={'_blank'}
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mostafaabbas98"
            target={'_blank'}
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:mostafaabbas98@outlook.com"
            target={'_blank'}
            rel="noreferrer"
          >
            <HiMail size={20} />
          </a>
          {renderThemeChanger()}
        </div>
      </div>

      {/* mobile nav */}
      {nav && (
        <MobileMenu renderThemeChanger={renderThemeChanger} setNav={setNav} />
      )}
    </header>
  );
};

export default Header;
