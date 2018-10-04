import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import reducer from '../src/store/reducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
