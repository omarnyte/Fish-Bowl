export const createRoom = () => (
    $.ajax({
        method: 'POST',
        url: '/api/room'
    })
);

export const getRoom = (slug) => (
    $.ajax({
        method: 'GET',
        url: `/api/room/${slug}`
    })
);