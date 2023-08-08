'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/doom.png'
              width={192}
              height={192}
              alt='DOOM'
              priority={true}
              className='h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.25,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className='mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl sm:mt-14'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I&apos;m Chris.</span> I&apos;m a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>8 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href='#contact'
          className='group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none active:scale-105 hover:scale-110 hover:bg-gray-950 transition'
        >
          Contact Me Here
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          href='/CV.pdf'
          download
          className='group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none border border-black/10 active:scale-105 hover:scale-110 transition'
        >
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          href='https://linkedin.com'
          target='_blank'
          className='bg-white text-gray-700 p-4 rounded-full outline-none border border-black/10 active:scale-105 hover:scale-[1.15] hover:text-gray-950 transition'
        >
          <BsLinkedin />
        </a>

        <a
          href='https://github.com/chrisdav6'
          target='_blank'
          className='bg-white text-gray-700 p-4 rounded-full text-[1.35rem] outline-none border border-black/10 active:scale-105 hover:scale-[1.15] hover:text-gray-950 transition'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
