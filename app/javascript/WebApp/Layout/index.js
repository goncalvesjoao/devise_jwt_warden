import React from 'react';
import { renderRoutes } from 'react-router-config';

const Layout = ({ route }) => (
  <div>
    <p>teste</p>
    {renderRoutes(route.routes)}
    <p>teste</p>
  </div>
);

export default Layout;
