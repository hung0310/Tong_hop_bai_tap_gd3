import { useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const useSearch = ({ url, setData, setNotFound, setLoading }) => {
  const handleSearch = useCallback(
    debounce(async (searchTerm) => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}?search=${searchTerm}`);

        if (response.data && response.data.length === 0) {
          setNotFound(true); 
        } else {
          setNotFound(false);
          setData(response.data); 
        }
      } catch (error) {
        console.error(error);
        setNotFound(true); 
      } finally {
        setLoading(false); 
      }
    }, 300),
    [url, setData, setNotFound]
  );

  return { handleSearch };
};

export default useSearch;