import React from 'react';

import Loader from 'components/Loader';
import DataGetter from 'components/DataGetter';

const Widget = React.lazy(() =>
  import('../components/Widget/WidgetWithContext'),
);

export default function() {
  return (
    <>
      {[...Array(15).keys()].map(i => (
        <DataGetter key={i}>
          <React.Suspense fallback={<Loader />}>
            <Widget />
          </React.Suspense>
        </DataGetter>
      ))}
    </>
  );
}
