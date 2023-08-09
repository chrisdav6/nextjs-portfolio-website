'use client';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '@/components/SectionHeading';
import Project from '@/components/Project';
import { projectsData } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);

  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <SectionHeading text='My Projects' />

      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
