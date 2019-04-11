import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style.js';
import { GlobalIconfont } from './statics/iconfont/iconfont'
import App from './App';


ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <GlobalIconfont/>
    <App />
  </Fragment>,
  document.getElementById('root'));
