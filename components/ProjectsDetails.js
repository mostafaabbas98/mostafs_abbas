import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
const ProjectsDetails = ({ data }) => {
  const { image, head, desc, githubLink, websiteLink } = data;
  return (
    <div className="flex flex-col md:flex-row  w-11/12 mx-auto divide-y-4 md:divide-y-0 md:divide-x-4 divide-amber-500 mb-6">
      <div className="relative h-96 md:basis-1/2 cursor-pointer">
        <Image
          src={image}
          layout="fill"
          className="object-cover object-top hover:object-bottom transition-all duration-1000 brightness-50 hover:filter-none rounded-t-md md:rounded-none md:rounded-l-md md:even:rounded-l-none"
        />
      </div>
      <div className="md:basis-1/2 border relative text-white dark:text-black bg-[#14213D] dark:bg-[#E5E5E5] p-4 rounded-b-md md:rounded-b-none md:rounded-r-md md:max-h-96 flex flex-col justify-evenly">
        <div className="flex justify-between place-items-center">
          <h1 className="text-xl font-bold">{head}</h1>
          <div className="flex gap-4 text-lg place-items-center">
            <a href={githubLink}>
              <BsGithub />
            </a>
            <a href={websiteLink}>
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className="whitespace-pre-line leading-10 md:leading-8">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectsDetails;
