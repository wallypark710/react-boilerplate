import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@src/App';
import GlobalStyled from '@src/GlobalStyles';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyled />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
