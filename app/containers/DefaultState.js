import React from 'react';

import Loader from 'components/Loader';

const Widget = React.lazy(() => import('../components/Widget/WidgetWithProps'));

export default function() {
  return (
    <>
      {[...Array(15).keys()].map(i => (
        <React.Suspense fallback={<Loader />} key={i}>
          <Widget />
        </React.Suspense>
      ))}
    </>
  );
}
