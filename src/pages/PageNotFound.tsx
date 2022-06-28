import * as React from 'react';
import { Helmet } from 'react-helmet';

export function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>Oops Page Not Found - Highway.so</title>
      </Helmet>
      <div>Oops Page Not Found</div>
    </div>
  );
}

export default PageNotFound;
