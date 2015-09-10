import React from 'react';

import HomePage from './components/home';

require('./css/styles.scss');

window.document.addEventListener('DOMContentLoaded', function() {
  React.render(
    <HomePage />,
    window.document.body
  );
});
