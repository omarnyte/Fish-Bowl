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
            createRoom(displayName).then(resp => console.log(resp));
        } else {
            getRoom('ji8v2').then(resp => console.log(resp));
        }
    }

    // Validations 
    validateDisplayName(str, e) {
        e.persist()
        
        // validate length
        if (str.length === 0) {
            e.target.parentElement.classList.remove('has-success', 'has-error');
            return false;
        } else if (str.length >= 20) { 
            e.target.parentElement.classList.add('has-error');
            return false; 
        }

        // TODO validate availability only when joining, not creating, room
        checkNameAvailability(str).then(resp => {
            if (resp === false) {
                console.log(resp)
                e.target.parentElement.classList.remove('has-success');
                e.target.parentElement.classList.add('has-error');
                return false;
            } else {
                console.log(resp)
                e.target.parentElement.classList.remove('has-error');
                e.target.parentElement.classList.add('has-success');
                return false;
            }
        });
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


// validateDisplayName(str, e) {
//     // validate length 
//     if (str.length === 0) {
//         e.target.parentElement.classList.remove('has-success', 'has-error');
//         return false;
//     } else if (str.length >= 20) {
//         e.target.parentElement.classList.add('has-error');
//         return false;
//     }

//     // TODO validate availability only when joining, not creating, room
//     if (this.props.match.path === "/join-room") {
//         checkNameAvailability(str).then((resp, e) => {
//             if (resp === false) {
//                 console.log(resp)
//                 this.e.target.parentElement.classList.remove('has-success');
//                 this.e.target.parentElement.classList.add('has-error');
//                 return false;
//             } else {
//                 this.e.target.parentElement.classList.remove('has-error');
//                 this.e.target.parentElement.classList.add('has-success');
//             }
//         });
//     }

//     e.target.parentElement.classList.remove('has-error');
//     e.target.parentElement.classList.add('has-success');
//     return true 