import React, { useState, useEffect } from 'react';

import { DataContext } from './context';
import { getItems } from '../../api';

const DataGetter = ({ children }) => {
  const [value, setValue] = useState({ data: [], isLoading: true });

  useEffect(() => {
    console.log(performance.now());
    getItems().then(data => setValue({ data, isLoading: false }));
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataGetter;
