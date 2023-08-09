'use client';
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Project from '@/components/Project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

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
