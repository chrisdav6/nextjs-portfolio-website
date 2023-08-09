import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Project from '@/components/Project';
import { projectsData } from '@/lib/data';

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-28'>
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
