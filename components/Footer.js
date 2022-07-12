import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer className="bg-[#E5E5E5] dark:bg-[#14213D] w-full text-center pt-20 pb-10">
      <div className="flex justify-around place-items-center">
        <div className="leading-8">
          <h3 className="text-3xl font-caveat text-amber-500">Mostafa Abbas</h3>
          <p className="">fronend developer</p>
          <div className="flex gap-4 justify-center text-amber-500 pt-2">
            <a
              href="https://www.linkedin.com/in/mostafa-abbas98/"
              target={'_blank'}
              rel="noreferrer"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://github.com/mostafaabbas98"
              target={'_blank'}
              rel="noreferrer"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="mailto:mostafaabbas98@outlook.com"
              target={'_blank'}
              rel="noreferrer"
            >
              <HiMail size={24} />
            </a>
          </div>
        </div>
        <div>
          <Link href="/">
            <span>
              <BsArrowUpSquareFill
                size={26}
                className="cursor-pointer text-amber-500 rounded-md"
              />
            </span>
          </Link>
        </div>
      </div>
      <p className="text-sm pt-5">
        source code by
        <a
          href="https://github.com/mostafaabbas98/mostafs_abbas"
          target={'_blank'}
          rel="noreferrer"
        >
          &nbsp;mostafa abbas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
