import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiJquery,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiFirebase,
} from 'react-icons/si';

const AboutMe = () => {
  return (
    <section id="skills" className="w-full pt-32">
      <h1 className="text-2xl text-center font-semibold capitalize underline decoration-double pb-6 text-amber-500">
        Skills
      </h1>
      <div className="flex justify-center gap-12 pt-10 px-8 flex-wrap">
        <SiHtml5 size={50} />
        <SiCss3 size={50} />
        <SiBootstrap size={50} />
        <SiSass size={50} />
        <SiTailwindcss size={50} />
        <SiJavascript size={50} />
        <SiJquery size={50} />
        <SiReact size={50} />
        <SiRedux size={50} />
        <SiNextdotjs size={50} />
        <SiFirebase size={50} />
        <SiGit size={50} />
      </div>
    </section>
  );
};

export default AboutMe;
