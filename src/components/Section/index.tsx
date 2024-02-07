import { ReactElement, ReactNode } from 'react';

import IBaseComponentProps from '^/types/IBaseComponentProps';
import Typography from '^/components/Typography';
import Container, { IContainerProps } from '^/components/Container';

interface ISectionProps extends IBaseComponentProps, Pick<IContainerProps, 'id'> {
  title?: ReactNode;
}

const Section = ({ title, className, id, children }: ISectionProps): ReactElement => (
  <Container
    id={id}
    className={className}
    contentClassName="flex flex-col gap-8 py-8 md:py-12"
  >
    {title && (
      <Typography
        as="h2"
        variant="title2"
        className="text-black dark:text-white"
      >
        {title}
      </Typography>
    )}

    {children}
  </Container>
);

export default Section;
