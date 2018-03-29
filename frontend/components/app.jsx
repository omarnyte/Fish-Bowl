import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';


import EnterRoomContainer from './enterRoom/enterRoomContainer';
import Lobby from './lobby';
import WaitingRoomContainer from './waitingRoom/waitingRoomContainer';

const App = () => (
    <div className="container-fluid">
        <header>
            <img src="logo.png" alt="Fish Bowl Logo" className="img-responsive"></img>
        </header>


        <Switch>
            <Route exact path="/" component={Lobby} />
            <Route exact path="/new-room" component={EnterRoomContainer} />
            <Route exact path="/join-room" component={EnterRoomContainer} />
            <Route exact path="/waiting-room" component={WaitingRoomContainer} />
        </Switch>

    </div>
);

export default App;