import { ReactElement } from 'react';

import Section from '^/components/Section';
import PageSection from '^/enums/PageSection';
import IProject from '^/types/IProject';
import projects from '^/configs/projects';
import texts from '^/configs/texts';

import ProjectCard from './ProjectCard';

const projectCardColSpan = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4'];
const imgSizesMap: Record<number | 'default', string> = {
  default: '(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw',
  0: '(max-width: 639px) 100vw, (max-width: 767px) 50vw, 70vw',
  1: '(max-width: 639px) 100vw, (max-width: 767px) 50vw, 30vw',
};

const ProjectsSection = (): ReactElement => (
  <Section
    id={PageSection.Projects}
    title={texts.sections[PageSection.Projects].title}
  >
    <div className="grid w-full grid-cols-12 grid-rows-2 gap-4 md:gap-6">
      {projects.map((project: IProject, index: number): ReactElement => (
        <ProjectCard
          key={project.title}
          project={project}
          className={projectCardColSpan[index] || 'lg:col-span-4'}
          imgProps={{
            sizes: imgSizesMap[index] || imgSizesMap.default,
          }}
        />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
