import React from 'react';

class WaitingRoom extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (!this.props) return <p> loading </p>;
        console.log(this.props)
        return (
            <div>
                <h1>Currently in {this.props.room.slug}</h1>
            </div>
        )

    }
};

export default WaitingRoom;