import IEmploymentRecord from '^/types/IEmploymentRecord';

const employmentRecords: IEmploymentRecord[] = [
  {
    companyName: 'K.W. Bruun & Co',
    link: 'https://www.kwbruun.com/',
    location: 'Copenhagens',
    position: 'Lead React developer',
    companyOverview: 'K.W. Bruun & Co serves as the official car dealer and logistics operator for the renowned \'Stellantis\' corporation, covering operations across Denmark and Sweden',
    startDate: new Date(2021, 4),
    description: 'Provide support for existing applications within a large and interconnected ecosystem. Lead the development of new applications using React. Conduct thorough code reviews. Successfully managed a dynamic frontend team',
    stack: [
      'TypeScript',
      'React',
      'Redux',
      'ReactQuery',
      'Next.js',
      'TailwindCSS',
    ],
  },
  {
    companyName: 'Moment Team AS',
    link: 'https://www.milientsoftware.com/',
    location: 'Oslo',
    position: 'Senior React developer',
    companyOverview: 'Moment is a product-based company headquartered in Oslo, Norway, specializing in advanced project management solutions tailored for the Scandinavian market. The company\'s flagship product is a web-based application offering a comprehensive suite of tools for efficiently managing and forecasting project lifecycles.',
    startDate: new Date(2019, 7),
    endDate: new Date(2021, 4),
    description: 'Transformed and modernized codebase from Redux to React-Query, reducing complexity and boosting performance. Developed new features, enhanced overall application speed during high-load periods, and conducted code reviews. Improved onboarding for new team members, stayed updated on tech trends, and integrated React-Query with custom wrappers. Introduced a UI component library for a more standardized and pleasant user experience. Upgraded frontend architecture to support hooks, ensuring code reusability. Occasionally handled minor backend tasks in Java (Spring) and streamlined locale file management to eliminate merge issues.',
    stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'ReactQuery',
      'StyledComponents',
    ],
  },
  {
    companyName: '247Labs',
    link: 'https://247labs.com/',
    location: 'Toronto',
    position: 'Frontend developer',
    companyOverview: '247Labs, headquartered in Toronto, Canada, is an outsourcing company with a primary focus on web and mobile development across diverse technology stacks. Notably, the company has successfully secured prestigious commercial clients such as IBM, Motorola as well as government-based projects.',
    startDate: new Date(2016, 3),
    endDate: new Date(2019, 7),
    description: 'Provided ongoing support for the existing web-based application in Angular and Ionic, including the implementation of new features for both platforms. Proposed and performed a fine transition in the web-based application visualization tools, moving from ready-made data viz libraries to custom-built modules, utilizing D3.js. This transition granted full control over dataset representation and enabled the creation of a diverse range of custom visualizations not available in pre-built solutions. Maintained consistent communication directly with the client, actively participating in the product lifecycle, and influencing the technical evolution of the product.',
    stack: [
      'JavaScript',
      'Angular',
      'Ionic',
      'D3.js',
      'FireBase',
    ],
  },
];

export default employmentRecords;
