'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import Project from '@/components/Project';
import { projectsData } from '@/lib/data';

const Projects = () => {
  return (
    <section id='projects'>
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
