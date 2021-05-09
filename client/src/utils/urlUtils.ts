export const prepareQueryParamsURLFromObject = (
  baseObject: Record<string, unknown>,
  baseURL?: string,
) => {
  const queryParamsEntries = Object.entries(baseObject);
  const queryParamsArray = queryParamsEntries.map(queryParamEntry =>
    queryParamEntry.join("="),
  );
  const queryParamsURL = queryParamsArray.join("&");
  if (baseURL) {
    return `${baseURL}?${queryParamsURL}`;
  }
  return `?${queryParamsURL}`;
};
