import { useState } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (fn, setState) => {
    try {
      setIsLoading(true);
      const response = await fn;
      setState(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading };
};

export default useFetch;
