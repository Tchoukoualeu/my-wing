import React, { useEffect, useState } from 'react';
import { API } from './api/api';
import BackdropLoader from './components/BackdropLoader';
import GalleryFilter from './components/GalleryFilter';
import GalleryGrid from './components/GalleryGrid';
import GallerySnackBar from './components/GallerySnackBar';

function App() {
  const [filters, setFilters] = useState({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    showViral: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
        isLoading
      ) {
        return;
      }
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
          const result = await API.fetchData(filters, page + 1);

          setImages(images => [...images, ...result.data]);
          setPage(page => page + 1);
        } catch (error) {
          setIsError(true);
        }

        setIsLoading(false);
      };

      fetchData();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, filters, page]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await API.fetchData(filters);

        setImages(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <GallerySnackBar isError={isError} setIsError={setIsError} />
      <GalleryFilter
        filters={filters}
        setFilters={setFilters}
      />
      <GalleryGrid
        images={images}
      />
      <BackdropLoader open={isLoading} />
    </div>
  );
}

export default App;
