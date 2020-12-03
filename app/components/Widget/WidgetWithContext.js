import React, { useContext } from 'react';

import Widget from './Widget';
import { DataContext } from '../DataGetter';

const WidgetWithContext = () => {
  const { isLoading, data } = useContext(DataContext);

  return <Widget loading={isLoading} data={data} />;
};

export default WidgetWithContext;
