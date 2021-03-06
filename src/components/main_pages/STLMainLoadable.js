import React from "react";
import Loadable from 'react-loadable';

const loading = () => (
  <div>
    Loading...
  </div>
);

export default Loadable({
  loader: () => import('./STLMain'),
  loading
});