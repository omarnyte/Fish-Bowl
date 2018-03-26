import React from 'react';
import { Link } from 'react-router-dom';

import {
    createRoom,
    getRoom
} from '../util/roomApiUtil';

class EnterRoom  extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    componentDidMount() {
    }
    
    handleButtonClick(e){
        if (e.currentTarget.textContent === 'Create Room') {
            createRoom().then(resp => console.log(resp));
        } else {
            getRoom('ji8v2').then(resp => console.log(resp));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    renderButton() {
        if (this.props.match.path === '/new-room') {
            return (
                <button className="btn btn-default" onClick={this.handleButtonClick}>Create Room</button>
            )
        } else {
            return (
                <button className="btn btn-default" onClick={this.handleButtonClick}>Enter Room</button>
            )
        }
    }
    
    render() {
        
        return (
            <div>
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <label> Enter a display name
                        <input type="text"/>
                        {this.renderButton()}
                    </label>
                </form>
            </div>
        )

    }
};

export default EnterRoom;