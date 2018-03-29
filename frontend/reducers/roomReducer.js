import merge from 'lodash/merge';

import {
    RECEIVE_ROOM
} from '../actions/roomActions';

const roomReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
        case RECEIVE_ROOM:
            newState = action.room;
            return newState;
        default:
            return state;
    }
}

export default roomReducer;