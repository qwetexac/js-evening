import React, { useEffect, useState } from 'react';

import Widget from './Widget';
import { getItems } from '../../api';

console.groupCollapsed('first data get');

const WidgetWithProps = () => {
  const [state, setState] = useState({ loading: true, data: [] });

  useEffect(() => {
    console.log(performance.now());

    getItems().then(dataFromApi => {
      setState({ data: dataFromApi, loading: false });
    });
  }, []);

  return <Widget data={state.data} loading={state.loading} />;
};

export default WidgetWithProps;
