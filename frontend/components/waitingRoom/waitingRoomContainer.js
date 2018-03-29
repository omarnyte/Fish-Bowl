import { connect } from 'react-redux';

import WaitingRoom from './waitingRoom';

const mapStateToProps = (state) => ({
    room: state.entities.room
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingRoom);