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
        this.setState({ displayName });
        
        const button = document.querySelector('button');
        if (this.validateDisplayName(displayName, e)) {
            // enable submit button 
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.match.path === '/new-room') {
            const displayName = this.state.displayName;
            createRoom({ displayName }).then(resp => console.log(resp));
        } else {
            getRoom('ji8v2').then(resp => console.log(resp));
        }
    }

    // Validations 
    validateDisplayName(str, e) {
        // validate length 
        if (str.length === 0) {
            e.target.parentElement.classList.remove('has-success', 'has-error');
            return false;
        } else if (str.length >= 20) { 
            e.target.parentElement.classList.add('has-error');
            return false; 
        }

        e.target.parentElement.classList.add('has-success');
        return true;

        // validate availability 
    }
    
    render() {
        const { displayName } = this.state;
        const { path } = this.props.match;

        return (
            <div>
                <form className="form-group has-feedback">
                    <label className="control-label" >Please Enter a Display Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={displayName}
                        onChange={this.handleInputChange}
                        id="display-name-input" aria-describedby="display-name-input"></input>
                    <div className="col-xs-10">
                        <button className="btn btn-default" disabled="disabled">
                            {path === "/new-room" ? "Create Room" : "Join Room"}
                        </button>
                    </div>
                </form>

            </div>
        )

    }
};

export default EnterRoom;

{/* <div class="has-success has-feedback">
    <form className="form-control" onSubmit={this.handleSubmit}>
        <label> Enter a display name</label>
        <input
            type="text"
            className="form-control"
            value={displayName}
            onChange={this.handleInputChange}
        />
        <div className="col-xs-10">
            <button className="btn btn-default">
                {path === "/new-room" ? "Create Room" : "Join Room"}
            </button>
        </div>
    </form>
</div> */}
    