
import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

// add Provider when Redux is set up
const Root = () => (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

export default Root;