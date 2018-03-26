export const createRoom = () => (
    $.ajax({
        method: 'POST',
        url: '/api/room'
    })
);