import React from 'react';
import { Link } from 'react-router-dom';

import {
    createRoom,
    getRoom
} from '../util/roomApiUtil';

class EnterRoom  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    
    handleInputChange(e) {
        const displayName = e.target.value;
        this.setState({ displayName })
        if (displayName.length >= 20) {
            console.log('too long!');
        } 
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.match.path === '/new-room') {
            // TODO add logic to prevent submission of form if display name is too long
            const displayName = this.state.displayName;
            createRoom({ displayName }).then(resp => console.log(resp));
        } else {
            getRoom('ji8v2').then(resp => console.log(resp));
        }
    }
    
    render() {
        const { displayName } = this.state;
        const { path } = this.props.match;

        return (
            <div>
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <label> Enter a display name
                        <input 
                            type="text" 
                            value={displayName}
                            onChange={this.handleInputChange}
                        />
                        <button className="btn btn-default">
                            { path === "/new-room" ? "Create Room" : "Join Room" }
                        </button>
                    </label>
                </form>
            </div>
        )

    }
};

export default EnterRoom;