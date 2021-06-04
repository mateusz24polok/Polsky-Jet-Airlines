export const getCelsiusTemperature = (kelvinDegree: number): number => {
  const celsiusDegree = kelvinDegree - 273.15;
  return Number(celsiusDegree.toFixed(2));
};
