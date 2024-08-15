import { useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const useSearch = ({ url, setData }) => {
  const handleSearch = useCallback(
    debounce(async (searchTerm) => {
      try {
        const response = await axios.get(`${url}?search=${searchTerm}`);
        setData(response.data || []);
      } catch (error) {
        console.error(error);
      }
    }, 500),
    [url, setData]
  );

  return { handleSearch };
};

export default useSearch;