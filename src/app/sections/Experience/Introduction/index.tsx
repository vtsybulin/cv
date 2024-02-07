import { ReactElement, ReactNode } from 'react';
import { Button, Code, Link } from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';
import { RxDownload } from 'react-icons/rx';

import Typography from '^/components/Typography';
import globalTexts from '^/configs/texts';
import PageSection from '^/enums/PageSection';
import SocialLinks from '^/components/SocialLinks';
import IBaseComponentProps from '^/types/IBaseComponentProps';
import getCurrentEmploymentFormatted from '^/utils/getCurrentEmploymentFormatted';

interface IIntroductionProps extends IBaseComponentProps {}

const texts = globalTexts.sections[PageSection.Experience].introduction;

const Introduction = ({ className }: IIntroductionProps): ReactElement => (
  <div className={twMerge('flex flex-col gap-8', className)}>
    <div
      className="z-10 flex flex-col gap-4 max-lg:py-6"
    >
      <Typography
        as="h1"
        variant="title1"
        className="text-secondary"
      >
        {texts.title}
      </Typography>

      <Code className="mb-4 max-w-fit break-words">
        {getCurrentEmploymentFormatted()}
      </Code>

      <SocialLinks />
    </div>

    <div className="flex shrink-0 flex-col gap-4">
      {texts.blocks.map((block: ReactNode, index: number): ReactElement => (
        <Typography
          key={index}
          variant="body1"
        >
          {block}
        </Typography>
      ))}
    </div>

    <Button
      as={Link}
      href="/cv.pdf"
      isExternal
      color="secondary"
      variant="flat"
      className="mx-auto w-auto"
      startContent={<RxDownload className="size-6 shrink-0" />}
    >
      {texts.downloadButtonLabel}
    </Button>
  </div>
);

export default Introduction;
