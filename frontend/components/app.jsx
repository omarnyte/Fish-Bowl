import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';


import EnterRoom from './enterRoom';
import Lobby from './lobby';
import waitingRoom from './waitingRoom/waitingRoom';

const App = () => (
    <div className="container-fluid">
        <header>
            <img src="logo.png" alt="Fish Bowl Logo" className="img-responsive"></img>
        </header>


        <Switch>
            <Route exact path="/" component={Lobby} />
            <Route exact path="/new-room" component={EnterRoom} />
            <Route exact path="/join-room" component={EnterRoom} />
            <Route exact path="/waiting-room" component={waitingRoom} />
        </Switch>

    </div>
);

export default App;