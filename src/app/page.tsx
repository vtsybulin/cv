import { ReactElement } from 'react';

import Spotlight from '^/components/Spotlight';

import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Projects';
import ContactRequestSection from './sections/ContactRequest';

const Root = (): ReactElement => (
  <main className="min-h-screen">
    <Spotlight className="max-md:hidden" />

    <div className="relative z-10">
      <ExperienceSection />

      <ProjectsSection />

      <ContactRequestSection />
    </div>
  </main>
);

export default Root;
