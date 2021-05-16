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

export const prepareObjectFromQueryParamsURL = (url: string) => {
  if (url.startsWith("?")) {
    const queryParams = url.slice(1).split("&");
    const queryParamsObject = queryParams.reduce(
      (previousValue, currentValue) => {
        const currentObjectEntry = currentValue.split("=");
        return {
          ...previousValue,
          [currentObjectEntry[0]]: currentObjectEntry[1],
        };
      },
      {},
    );
    return queryParamsObject;
  }
  return {};
};
