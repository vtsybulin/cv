import { ReactElement } from 'react';

import Typography from '^/components/Typography';
import IEmploymentRecord from '^/types/IEmploymentRecord';
import getDatePeriodFormatted from '^/utils/getDatePeriodFormatted';
import texts from '^/configs/texts';
import PageSection from '^/enums/PageSection';
import Section from '^/components/Section';
import employmentRecords from '^/configs/employmentRecords';

import EmploymentCard from './EmploymentCard';
import Introduction from './Introduction';

const ExperienceSection = (): ReactElement => (
  <Section
    id={PageSection.Experience}
  >
    <div className="flex flex-col items-baseline gap-10 lg:flex-row-reverse lg:gap-12">
      <Introduction className="shrink-0 lg:w-[26rem]" />

      <div>
        <Typography
          as="h2"
          variant="title2"
          className="pb-8 text-black dark:text-white"
        >
          {texts.sections[PageSection.Experience].title}
        </Typography>

        <div className="relative">
          <div className="absolute inset-y-0 right-10 m-auto h-full w-[2px] bg-gradient-to-b from-transparent from-5% via-secondary/30 via-50% to-transparent to-95%" />

          <div className="grid gap-4">
            {
              employmentRecords.map((experienceRecord: IEmploymentRecord, index: number): ReactElement => (
                <div
                  key={index}
                  className="relative flex flex-row gap-8 before:absolute before:inset-y-0 before:right-9 before:my-auto before:box-content before:size-2 before:rounded-full before:border before:border-secondary before:bg-background before:content-['']"
                >
                  <EmploymentCard {...experienceRecord} />

                  <div
                    className="inset-0 m-auto"
                    style={{
                      writingMode: 'vertical-lr',
                    }}
                  >
                    <Typography
                      variant="caption1"
                      className="text-secondary"
                    >
                      {getDatePeriodFormatted(experienceRecord.startDate, experienceRecord.endDate)}
                    </Typography>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default ExperienceSection;

