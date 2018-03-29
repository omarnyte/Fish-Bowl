import React from 'react';
import { Link } from 'react-router-dom';

import {
    createRoom,
    getRoom,
    checkNameAvailability
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
        
        this.validateDisplayNameLength(displayName, e) &&this.validateDisplayNameAvailability(displayName, e)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.match.path === '/new-room') {
            // const displayName = this.state.displayName;
            // createRoom(displayName).then(resp => console.log(resp));
            return (
                <Link to="/waiting-room"></Link>
            )
        } else {
            // getRoom('ji8v2').then(resp => console.log(resp));
            return (
                <Link to="/waiting-room"></Link>
            )
        }

    }

    // Validations 
    validateDisplayNameLength(str, e) {
        if (str.length === 0) {
            e.target.parentElement.classList.remove('has-success', 'has-error');
            this.setButtonStatus('disable');
            return false;
        } else if (str.length >= 20) { 
            e.target.parentElement.classList.add('has-error');
            this.setButtonStatus('disable');
            return false;
        } else {
            e.target.parentElement.classList.remove('has-error');
            e.target.parentElement.classList.add('has-success');
            this.setButtonStatus('enable');
            return true;
        }
    }

    validateDisplayNameAvailability(str, e) {
        const button = document.querySelector('button');

        if (this.props.match.path === '/new-room') return;
  
        e.persist();
        checkNameAvailability(str).then(resp => {
            if (resp === false) {
                e.target.parentElement.classList.remove('has-success');
                e.target.parentElement.classList.add('has-error');
                this.setButtonStatus('disable');
            } else {
                e.target.parentElement.classList.remove('has-error');
                e.target.parentElement.classList.add('has-success');
                this.setButtonStatus('enable');
            }
        });
    }

    //helper methods
    setButtonStatus(status) {
        const button = document.querySelector('button');
        
        if (status === 'enable' && button.disabled) {
            button.removeAttribute('disabled');
        } else if (status === 'disable' && !button.disabled) {
            button.setAttribute('disabled', 'disabled');
        }
    }
    
    render() {
        const { displayName } = this.state;
        const { path } = this.props.match;

        return (
            <div>
                <form 
                    className="form-group has-feedback"
                    onSubmit={this.handleSubmit}>
                    <label className="control-label" >Please Enter a Display Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={displayName}
                        onChange={this.handleInputChange}
                        id="display-name-input" aria-describedby="display-name-input"></input>
                    <div className="col-xs-10">
                        <Link to="/waiting-room">
                            <button className="btn btn-default" disabled="disabled">
                                {path === "/new-room" ? "Create Room" : "Join Room"}
                            </button>
                        </Link>
                    </div>
                </form>

            </div>
        )

    }
};

export default EnterRoom;