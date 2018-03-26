import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div className="container-fluid">
        <img src="logo.png" alt="Fish Bowl Logo" className="img-responsive"></img>
        <button className="btn btn-block btn-primary">New Room</button>
        <button className="btn btn-block btn-primary">Join Room</button>
    </div>
);

export default App;