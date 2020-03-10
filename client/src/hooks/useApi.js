import { useState, useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useApi = (initialValue, dataPromise) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getData() {
      const apiData = await dataPromise;
      setData(apiData.data);
    }
    getData();
  }, [dataPromise]);

  return data;
};
