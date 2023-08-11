const Footer = () => {
  return (
    <footer className='text-center mb-10 px-4 text-gray-500'>
      <small className='block mb-2 text-xs'>
        &copy; 2023 Chris Davis. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React and Next.js 13 (App Router &amp; Server Actions), Typescript,
        Tailwind CSS, Framer Motion, React Email, Resend and hosted on Vercel.
      </p>
    </footer>
  );
};

export default Footer;
