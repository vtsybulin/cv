import texts from '^/configs/texts';

const formatterInstance = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
});

const getDatePeriodFormatted = (startDate: Date, endDate?: Date): string => {
  const startDateFormatted = formatterInstance.format(startDate);

  if (!endDate) {
    return `${startDateFormatted} - ${texts.common.present}`;
  }

  const endDateFormatted = formatterInstance.format(endDate);

  return `${startDateFormatted} - ${endDateFormatted}`;
};

export default getDatePeriodFormatted;
