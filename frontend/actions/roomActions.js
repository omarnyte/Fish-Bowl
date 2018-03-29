import * as roomAPIUtil from '../util/roomApiUtil';

export const RECEIVE_ROOM = 'RECEIVE_ROOM';

// thunk actions 
export const fetchRoom = (slug) => dispatch => (
    roomAPIUtil.getRoom(slug).then(roomResp => {
        dispatch(receiveRoom(roomResp));
    })
);


// sync actions 
export const receiveRoom = (room) => ({
    type: RECEIVE_ROOM,
    room 
});