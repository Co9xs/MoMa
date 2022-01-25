const fetchWrapper = <T>(fetch: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              /* eslint-disable @typescript-eslint/no-unsafe-argument */
              resolve(json);
            })
            .catch((error) => reject(error));
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = <T = any>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  return fetchWrapper<T>(fetch(input, init));
};

export { fetcher };
