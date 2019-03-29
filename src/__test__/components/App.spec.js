import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';

import rootReducer from '../../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('App Component', () => {
  it('Renders without crashing', () => {

    const store = createStore(rootReducer);

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
