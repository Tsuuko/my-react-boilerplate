import React from 'react';
import { Link } from 'react-location';

export const Home = () => (
  <div>
    <h1>Hello!</h1>
    <ul>
      <li>
        <Link to="sandbox">sandbox</Link>
      </li>
      <li>
        <Link to="undefined_route">404</Link>
      </li>
    </ul>
  </div>
);
