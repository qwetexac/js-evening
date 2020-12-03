import React from 'react';

import Loader from 'components/Loader';
import DataGetter from 'components/DataGetter';
import ScrollIntoView from 'components/ScrollIntoView';

const Widget = React.lazy(() =>
  import('../components/Widget/WidgetWithContext'),
);

export default function() {
  return (
    <>
      {[...Array(15).keys()].map(i => (
        <DataGetter key={i}>
          <ScrollIntoView fallbackHeight={500}>
            <React.Suspense fallback={<Loader />}>
              <Widget />
            </React.Suspense>
          </ScrollIntoView>
        </DataGetter>
      ))}
    </>
  );
}
