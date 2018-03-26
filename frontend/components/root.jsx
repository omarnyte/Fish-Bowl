
import React from 'react';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

// add Provider when Redux is set up
const Root = () => (
        <HashRouter>
            <App />
        </HashRouter>
);

export default Root;