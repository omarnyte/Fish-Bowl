import React from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => (
    <div>
        <Link to="/new-room">
            <button className="btn btn-block btn-primary">New Room</button>
        </Link>
        <Link to="/join-room">
            <button className="btn btn-block btn-primary">Join Room</button>
        </Link>
    </div>
);

export default Lobby;