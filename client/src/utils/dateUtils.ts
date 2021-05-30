export const getTimeHoursMinutesFormatDateFromMinutes = (
  minutes: number,
): string => {
  const timeHours = Math.floor(minutes / 60);
  const timeMinutes = minutes % 60;
  if (timeMinutes === 0) {
    return `${timeHours}h`;
  } else {
    return `${timeHours}h ${timeMinutes}m`;
  }
};

export const getNextDateAfterTimeElapsed = (
  basedDate: Date,
  minutesElapsed: number,
): Date => {
  const basedDateMs = new Date(basedDate).getTime();
  const nextDateMs = basedDateMs + minutesElapsed * 60 * 1000;
  return new Date(nextDateMs);
};
