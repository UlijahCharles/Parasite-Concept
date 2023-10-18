import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [apiData, setAPIData] = useState([]);

  const fetchCatalog = useCallback(async () => {
    try {
      //
      const response = await fetch(
        "https://parasite-88af6-default-rtdb.firebaseio.com/Data.json"
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const dataObject = await response.json();

      setAPIData(dataObject);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  return apiData;
};

export default useFetch;
