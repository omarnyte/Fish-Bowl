import { connect } from 'react-redux';

import EnterRoom from './enterRoom';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    createRoom: displayName => dispatch(createRoom(displayName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterRoom);