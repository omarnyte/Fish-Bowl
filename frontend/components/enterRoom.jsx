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
        console.dir(e.target)
        const displayName = e.target.value;
        this.setState({ displayName })
        if (displayName.length >= 20) {
            e.target.parentElement.classList.add('has-error');
            console.log('too long!');
            e.target.classList.add('input-invalid');

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
                <form className="form-group has-feedback">
                    <label className="control-label" >Please Enter a Display Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={displayName}
                        onChange={this.handleInputChange}
                        id="display-name-input" aria-describedby="display-name-input"></input>
                    <div className="col-xs-10">
                        <button className="btn btn-default">
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
    