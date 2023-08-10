'use client';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      className='mb-20 w-[min(100%,38rem)] sm:mb-28 scroll-mt-28 text-center'
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading text='Contact Me' />

      <p className='text-gray-700 -mt-5'>
        Please contact me directly at{' '}
        <a
          className='underline'
          href='mailto:chris.davis5440@gmail.com?subject=Hi, I found your portfolio!'
        >
          chris.davis5440@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='flex flex-col mt-10'
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type='email'
          name='senderEmail'
          className='h-14 rounded-lg border border-black/10 px-4'
          placeholder='Your Email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/10 p-4'
          name='message'
          placeholder='Your Message'
          required
          maxLength={5000}
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all active:scale-105 hover:scale-110 hover:bg-gray-950'
        >
          Submit{' '}
          <FaPaperPlane className='text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
