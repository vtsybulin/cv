import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, Card, CardFooter, CardHeader, Chip, Link } from '@nextui-org/react';
import Image from 'next/image';

import IProject from '^/types/IProject';
import texts from '^/configs/texts';
import Typography from '^/components/Typography';
import PageSection from '^/enums/PageSection';
import IBaseComponentProps from '^/types/IBaseComponentProps';

interface IProjectCardProps extends Pick<IBaseComponentProps, 'className'> {
  project: IProject;
}

const ProjectCard = ({ project, className }: IProjectCardProps): ReactElement => (
  <Card
    isFooterBlurred
    className={twMerge('col-span-12 h-[17rem] sm:col-span-6 md:h-[22rem]', className)}
    shadow="sm"
  >
    <CardHeader className="pointer-events-none absolute top-1 flex-col items-start">
      <Chip size="sm">
        {texts.projectArea[project.area]}
      </Chip>
    </CardHeader>

    <CardFooter className="absolute bottom-0 z-10 flex-col items-start bg-black/30">
      <div className="flex min-h-[4rem] w-full flex-row items-center justify-between">
        <div className="flex flex-col justify-between gap-1">
          <Typography
            variant="subtitle2"
            className="text-white"
          >
            {project.title}
          </Typography>

          <Typography
            variant="body3"
            className="text-white/60"
          >
            {project.description}
          </Typography>
        </div>

        <Button
          as={Link}
          variant="light"
          color="secondary"
          radius="full"
          size="sm"
          isExternal
          className="shrink-0"
        >
          {texts.sections[PageSection.Projects].projectCard.linkLabel}
        </Button>
      </div>
    </CardFooter>

    <Image
      alt={project.title}
      className="z-0 size-full object-cover transition-transform hover:scale-110"
      src={project.image}
      fill
    />
  </Card>
);

export default ProjectCard;
