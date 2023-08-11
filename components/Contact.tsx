'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  //Keeping track of form values to clear them after submission
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

      <p className='text-gray-700 -mt-5 dark:text-white/80'>
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
        className='flex flex-col mt-10 dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');

          //Clear form values
          setName('');
          setEmail('');
          setMessage('');
        }}
      >
        <input
          type='text'
          name='senderName'
          className='h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          placeholder='Your Name'
          required
          maxLength={500}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name='senderEmail'
          className='h-14 mt-3 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          placeholder='Your Email'
          required
          maxLength={500}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          name='message'
          placeholder='Your Message'
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
