/* eslint-disable react/jsx-no-literals */
import PageSection from '^/enums/PageSection';
import Theme from '^/enums/Theme';
import ProjectArea from '^/enums/ProjectArea';
import Field from '^/enums/Field';
import Status from '^/enums/Status';
import EmailTemplate from '^/enums/EmailTemplate';

const texts = {
  common: {
    at: 'at',
    present: 'Present',
    viewInGithub: 'View on GitHub',
  },
  theme: {
    [Theme.Light]: 'Light',
    [Theme.Dark]: 'Dark',
    [Theme.System]: 'System',
  },
  projectArea: {
    [ProjectArea.Automotive]: 'Automotive',
    [ProjectArea.Healthcare]: 'Healthcare',
    [ProjectArea.Travel]: 'Travel',
  },
  field: {
    [Field.Email]: 'Email',
    [Field.Name]: 'Name',
    [Field.Message]: 'Message',
  },
  status: {
    [Status.Success]: 'Success',
    [Status.Failure]: 'Failure',
  },
  email: {
    [EmailTemplate.ContactRequest]: {
      subject: 'New request',
      processingStatus: {
        [Status.Failure]: 'Oops! Seems like error occurred while trying to send the email.',
        [Status.Success]: 'Awesome! Thank you for reaching out. I\'ll review your request and will get back to you shortly.',
      },
    },
  },
  sections: {
    [PageSection.Experience]: {
      title: 'Experience',
      introduction: {
        title: 'Hi, I\'m Ivan',
        blocks: [
          <>
            I'm a Senior Frontend Developer with over 6 years of expertise in web development, primarily focusing on
            {' '}

            <span className="text-secondary">
            React and ReactNative
            </span>
            . In my current role at

            {' '}

            <span className="text-secondary">
            K.W. Bruun & Co
            </span>
            , I lead a frontend team, supporting and developing applications in React.
            My tech stack includes TypeScript, React, Redux, and ReactQuery.
          </>,
          <>
            Previously, at
            {' '}

            <span className="text-secondary">
            Moment Team AS
            </span>
            , I revamped outdated code from Backbone to React, propelled complex migration from Redux to ReactQuery,
            improving user experience and application performance along the way.
            I've also worked as a software engineer at

            {' '}

            <span className="text-secondary">
            247Labs
            </span>
            , contributing to projects like EliteHRV and Mason Intelligence,
            utilizing technologies such as JavaScript, Angular, Ionic, and D3.
          </>,
          'I hold a Master\'s degree in Computer Science from the National Technical University of Ukraine. Proficient in English, I\'m a fast learner, team player, and always eager to explore new stuff.',
        ],
        downloadButtonLabel: 'Download CV',
      },
    },
    [PageSection.Projects]: {
      title: 'Projects',
      projectCard: {
        linkLabel: 'View',
      },
    },
    [PageSection.ContactRequest]: {
      title: 'Get in touch',
      form: {
        placeholder: {
          [Field.Email]: 'Enter your email',
          [Field.Name]: 'Enter your name',
          [Field.Message]: 'Enter your message',
        },
        submitButtonLabel: 'Send',
        closeButtonLabel: 'Close',
      },
    },
  },
};

export default texts;
