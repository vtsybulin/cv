import IProject from '^/types/IProject';
import ProjectArea from '^/enums/ProjectArea';

const projects: IProject[] = [
  {
    title: 'Wismo',
    description: 'Complex e-commerce platform tailored for the automotive industry with feature-rich configurator',
    image: '/images/wismo.jpg',
    link: '',
    area: ProjectArea.Automotive,
  },
  {
    title: 'Digital Price Lists',
    description: 'An online viewer for automotive price lists, providing easy access to pricing information',
    image: '/images/price-lists.jpg',
    link: '',
    area: ProjectArea.Automotive,
  },
  {
    title: 'Digial Dealer',
    description: 'An automotive lead generation platform, featuring an advanced configurator',
    image: '/images/digital-dealer.jpg',
    link: '',
    area: ProjectArea.Automotive,
  },
  {
    title: 'Yukon Driving App',
    description: 'An app developed for the Yukon government to discover local attractions and sights',
    image: '/images/yukon.png',
    link: '',
    area: ProjectArea.Travel,
  },
  {
    title: 'Elite HRV Dashboard',
    description: 'EliteHRV dashboard with streamlined visualizations for the monitored datasets',
    image: '/images/elitehrv.jpg',
    link: '',
    area: ProjectArea.Healthcare,
  },
];

export default projects;
