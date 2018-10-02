import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@src/routes';
import injectStyle from '@src/renderer/injectStyle';

injectStyle();

const Application = () => (
  <div>
    <header>Electron React Redux Typescript</header>
    <nav>
      <Link to="/">Home</Link> |<Link to="/counter">Counter</Link>
    </nav>

    <main>{routes}</main>

    <footer>I'm the footer</footer>
  </div>
);

export default Application;
