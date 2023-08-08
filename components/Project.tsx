import Image from 'next/image';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative mb-3 sm:pr-8 sm:h-[20rem] sm:mb-8 last:mb-0'>
      <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>

        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl'
      />
    </section>
  );
};

export default Project;
