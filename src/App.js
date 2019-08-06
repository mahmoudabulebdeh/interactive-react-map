// import Map from './components/Map';
// Importing the Bootstrap CSS
import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const store = ConfigureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Main />
    </React.Fragment>
  </Provider>
);

export default App;
