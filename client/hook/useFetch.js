import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const useFetch = (initialLimit = 10) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [limit, setLimit] = useState(initialLimit); // Added limit state

  const fetchData = async () => {
    const SERVER_URL = process.env.SERVER_URL;
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/api/products?limit=${limit}`);
      console.log('Response Data:', response.data);
      setData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false); // Resetting shouldFetch after fetching data
    }
  }, [shouldFetch, limit]); // Added limit as a dependency

  // Fetch data manually with a new limit
  const refetch = (newLimit) => {
    setIsLoading(true);
    setLimit(newLimit); // Update the limit
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
