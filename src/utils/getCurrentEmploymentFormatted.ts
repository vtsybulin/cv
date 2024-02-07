import employmentRecords from '^/configs/employmentRecords';
import globalTexts from '^/configs/texts';

const currentEmployment = employmentRecords[0];

const getCurrentEmploymentFormatted = (): string => {
  if (!currentEmployment) {
    return '';
  }

  return `${currentEmployment.position} ${globalTexts.common.at} "${currentEmployment.companyName}"`;
};

export default getCurrentEmploymentFormatted;

