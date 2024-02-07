import { ReactElement } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Chip, Link, Tooltip } from '@nextui-org/react';

import IEmploymentRecord from '^/types/IEmploymentRecord';
import Typography from '^/components/Typography';

const formatLocation = (location: string): string => `/ ${location}`;

interface IEmploymentCardProps extends IEmploymentRecord {}

const EmploymentCard = ({ companyName, position, link, location, description, companyOverview, stack }: IEmploymentCardProps): ReactElement => (
  <Card
    className="relative"
    shadow="sm"
  >
    <CardHeader className="flex w-full flex-col items-start gap-1">
      <Typography
        variant="subtitle1"
        className="text-black dark:text-white"
      >
        {position}
      </Typography>

      <div className="flex flex-row items-baseline gap-2">
        <Tooltip
          content={companyOverview}
          className="max-w-[300px] drop-shadow-xl"
          showArrow
        >
          <Link
            href={link}
            underline="always"
            isExternal
            size="sm"
          >
            {companyName}
          </Link>
        </Tooltip>

        <Typography
          variant="caption2"
          className="text-foreground/70"
        >
          {formatLocation(location)}
        </Typography>
      </div>
    </CardHeader>

    <CardBody>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardBody>

    <CardFooter className="flex flex-row flex-wrap gap-2">
      {stack.map((entry: string): ReactElement => (
        <Chip
          key={entry}
          size="sm"
          variant="flat"
        >
          {entry}
        </Chip>
      ))}
    </CardFooter>
  </Card>
);

export default EmploymentCard;
