import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// testing 
import { 
    fetchRoom,
    createRoom
 } from './actions/roomActions';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    // testing 
    window.store = store;
    window.fetchRoom = fetchRoom;
    window.createRoom = createRoom;
});

