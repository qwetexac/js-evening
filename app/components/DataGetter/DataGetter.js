import React, { useState, useEffect } from 'react';
import { DataContext } from './context';

const DataGetter = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, Math.random() * 2000)
  }, [])
  
  return (
    <DataContext.Provider value={isLoading}>
      {children}
    </DataContext.Provider>
  )
};

export default DataGetter;
