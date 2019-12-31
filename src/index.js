import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

//<Provider> from react-redux is a component that is the parent of everything 
//inside of our application. As the parent it allows us the access 
//to all of the things inside our redux store. 
//It has to be the parent of everything so that our components
//have access to it.

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);