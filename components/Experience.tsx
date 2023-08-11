'use client';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import { experiencesData } from '@/lib/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ThemeContextProvider, { useTheme } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id='experience' className='mb-28 sm:mb-40 scroll-mt-28' ref={ref}>
      <SectionHeading text='My Experience' />

      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{ background: 'white', fontSize: '1.5rem' }}
            >
              <h3 className='font-semibold capitalize'>{experience.title}</h3>
              <p className='font-normal !mt-0'>{experience.location}</p>
              <p className='!mt-1 !font-normal text-gray-700'>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
