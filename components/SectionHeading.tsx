type SectionHeadingProps = {
  text: string;
};

const SectionHeading = ({ text }: SectionHeadingProps) => {
  return <h2 className='text-3xl font-medium mb-8 text-center'>{text}</h2>;
};

export default SectionHeading;
